<template>
  <div class="flex text-info mx-4 md:mx-0 mt-8">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      class="w-10 h-12 md:w-6 md:h-6  mx-2 stroke-current"
    >
      <path
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="2"
        d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
      ></path>
    </svg>
    <label class="md:text-lg "
      >You must first Submit Post Information and then you can edit the post in Edit Post</label
    >
  </div>
  <ErrorVue :variant="variant" :show="show" :style="'rounded'" :textMsg="textMsg"></ErrorVue>
  <form @submit.prevent="savePostMetadata">
    <div class="py-5 card ">
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
        Submit Post Info
      </button>
    </div>
  </form>
</template>

<script lang="ts">
import { postApi } from "@/api/postApi";
import { Post } from "@/interface/Post";
import { useStore } from "@/store";
import { useError } from "@/useError";
import { defineComponent } from "vue";
import EditorVue from "../Editor.vue";
import ErrorVue from "../Error.vue";

export default defineComponent({
  components: {
    EditorVue,
    ErrorVue
  },
  data() {
    return {
      content: "<p>Hello, World</p>" as string | undefined,
      blogTitle: "My First Post",
      blogDes: "Post description",
      submitDisabled: false,
      editDisabled: false,
      post: null as Post | null,
    };
  },
  setup(){
    const error = useError('Creating...')
    return {
      store:useStore(),
      ...error
    }
  },
  emits: {
    postAdded: (post: Post) => true,
    changeTab: (index: number) => true,
  },
  methods: {
    async savePostMetadata() {
      this.handleSubmit('Creating...')
      const title = this.blogTitle;
      const des = this.blogDes;
      try {
        const { data: post } = await postApi.post<Post>(`/createPost`, {
          data: { postName: title, postDescription: des },
        });
        this.handleSuccess('Post Created')
        this.post = post;
        this.$emit("postAdded", post);
        this.resetForm();
      } catch (err) {
        console.log(err);
        this.handleError('Something went wrong! Please try again')
      }
    },
    resetForm() {
      this.blogTitle = "";
      this.blogDes = "";
      this.$emit("changeTab", 1);
    },
  },
});
</script>
