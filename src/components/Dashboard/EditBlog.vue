<template>
  <ErrorVue :variant="variant" :show="show" :style="'rounded mt-8'" :textMsg="textMsg"/>
  <form @submit.prevent="editPost" id="content">
    <div class="py-10 card bg-base-300">
      <div class="form-control">
        <label class="label">
          <span class="label-text text-secondary">Name</span>
        </label>
        <input
          type="text"
          placeholder="Post title"
          class="input text-secondary-content"
          v-model="blogTitle"
        />
      </div>
      <div class="form-control">
        <label class="label">
          <span class="label-text text-secondary">Description</span>
        </label>
        <input
          type="text"
          placeholder="Post description"
          v-model="blogDes"
          class="input text-secondary-content"
        />
      </div>
      <button
        type="submit"
        :disabled="submitDisabled"
        class="btn btn-primary mt-5"
      >
        Submit
      </button>
    </div>
  </form>
  <h1 class="text-center font-mono text-4xl my-10  text-neutral-content">
    Text Editor
  </h1>
  <EditorVue :content="content" @content-updated="contentUpdated" />
  <button
    class="btn btn-secondary mt-5 ml-3"
    @click="editContent"
    :disabled="editDisabled"
  >
    Edit Blog
  </button>
</template>

<script lang="ts">
import { Post } from "@/interface/Post";
import { defineComponent, PropType } from "vue";
import EditorVue from "../Editor.vue";
import { postApi } from "@/api/postApi";
import { useError } from "@/useError";
import { useStore } from "@/store";
import ErrorVue from "../Error.vue";

export default defineComponent({
  components: {
    EditorVue,
    ErrorVue
  },
  data() {
    return {
      content: "",
      blogTitle: "",
      blogDes: "",
      submitDisabled: false,
      editDisabled: false,
    };
  },
  setup(){
    const error = useError('Please wait...')
    return {
      store:useStore(),
      ...error
    }
  },
  props: {
    post: {
      type: Object as PropType<Post>,
      required: true,
    },
  },
  async mounted() {
    const { name, description } = this.post;
    this.blogTitle = name;
    this.blogDes = description;
    this.fetchContent();
  },
  watch: {
    post(value) {
      const { name, description } = value as Post;
      this.blogTitle = name;
      this.blogDes = description;
      this.fetchContent();
    },
  },
  emits: {
    postMetadataUpdated: (id: string, data: Partial<Post>) => true,
  },
  methods: {
    async editContent() {
      this.editDisabled = true;
      await postApi.post(`/editContent`, {
        data: {
          contentId: this.$props.post.content,
          content: this.content,
        },
      });
      this.editDisabled = false;
    },
    contentUpdated(content: string) {
      this.content = content;
    },
    async editPost() {
      this.handleSubmit('Please wait...')
      const post = this.$props.post;
      const title = this.blogTitle;
      const des = this.blogDes;
      try{
        const d = await postApi.post(`/editPost`, {
        data: { postId: this.post.id, postName: title, postDescription: des },
        });
        console.log(d);
        this.handleSuccess('Success!')
        this.$emit("postMetadataUpdated", post.id, {
        name: title,
        description: des,
        });
      }catch(err){
        this.handleError('Something went wrong! Please try again later')
      }
    },
    async fetchContent() {
      const { data } = await postApi.get<{ id: number; content: string }>(
        `/content/${this.post.content}`
      );
      this.content = data.content;
    },
  },
});
</script>
