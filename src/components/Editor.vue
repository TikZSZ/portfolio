<template>
  <div v-if="editor" class=' focus:outline-black  focus:border-none'>
    <bubble-menu
      class="bubble-menu bg-primary text-black rounded"
      :tippy-options="{ duration: 100 }"
      :editor="editor"
      v-if="editor"
    >
      <button class="mx-2" @click="editor.chain().focus().toggleBold().run()" :class="{ 'is-active': editor.isActive('bold') }">
        Bold
      </button>
      <button class="mx-2" @click="editor.chain().focus().toggleItalic().run()" :class="{ 'is-active': editor.isActive('italic') }">
        Italic
      </button>
      <button class="mx-2" @click="editor.chain().focus().toggleStrike().run()" :class="{ 'is-active': editor.isActive('strike') }">
        Strike
      </button>
    </bubble-menu>
    <div v-if="editor" data-theme="forest"  class=" rounded bg-primary ">
      <button class="mx-1 text-primary-content bg-base-300 px-3 rounded-md my-2" @click="editor.chain().focus().toggleBold().run()" :class="{ 'is-active': editor.isActive('bold') }">
        <i class="fas fa-bold"></i>
      </button>
      <button class="mx-1 text-primary-content bg-base-300 px-3 rounded-md my-2" @click="editor.chain().focus().toggleItalic().run()" :class="{ 'is-active': editor.isActive('italic') }">
        <i class="fas fa-italic"></i>
      </button>
      <button class="mx-1 text-primary-content bg-base-300 px-3 rounded-md my-2" @click="editor.chain().focus().toggleStrike().run()" :class="{ 'is-active': editor.isActive('strike') }">
        <i class="fas fa-strikethrough"></i>
      </button>
      <button class="mx-1 text-primary-content bg-base-300 px-3 rounded-md my-2" @click="editor.chain().focus().toggleCode().run()" :class="{ 'is-active': editor.isActive('code') }">
        code
      </button>
      <button class="mx-1 text-primary-content bg-base-300 px-3 rounded-md my-2" @click="editor.chain().focus().unsetAllMarks().run()">
        Check Spelling
      </button>
      <!-- <button class="mx-1 text-primary-content bg-base3-300 px-3 rounded-md my-2" @click="editor.chain().focus().clearNodes().run()">
        clear nodes
      </button> -->
      <button @click="addImage" class="mx-1 text-primary-content bg-base-300 px-3 rounded-md my-2">
        add image from URL
      </button>
      <button class="mx-1 text-primary-content bg-base-300 px-3 rounded-md my-2" @click="editor.chain().focus().setParagraph().run()" :class="{ 'is-active': editor.isActive('paragraph') }">
        paragraph
      </button>
      <button class="mx-1 text-primary-content bg-base-300 px-3 rounded-md my-2" @click="editor.chain().focus().toggleHeading({ level: 1 }).run()" :class="{ 'is-active': editor.isActive('heading', { level: 1 }) }">
        h1
      </button>
      <button class="mx-1 text-primary-content bg-base-300 px-3 rounded-md my-2" @click="editor.chain().focus().toggleHeading({ level: 2 }).run()" :class="{ 'is-active': editor.isActive('heading', { level: 2 }) }">
        h2
      </button>
      <button class="mx-1 text-primary-content bg-base-300 px-3 rounded-md my-2" @click="editor.chain().focus().toggleHeading({ level: 3 }).run()" :class="{ 'is-active': editor.isActive('heading', { level: 3 }) }">
        h3
      </button>
      <button class="mx-1 text-primary-content bg-base-300 px-3 rounded-md my-2" @click="editor.chain().focus().toggleHeading({ level: 4 }).run()" :class="{ 'is-active': editor.isActive('heading', { level: 4 }) }">
        h4
      </button>
      <button class="mx-1 text-primary-content bg-base-300 px-3 rounded-md my-2" @click="editor.chain().focus().toggleHeading({ level: 5 }).run()" :class="{ 'is-active': editor.isActive('heading', { level: 5 }) }">
        h5
      </button>
      <button class="mx-1 text-primary-content bg-base-300 px-3 rounded-md my-2" @click="editor.chain().focus().toggleHeading({ level: 6 }).run()" :class="{ 'is-active': editor.isActive('heading', { level: 6 }) }">
        h6
      </button>
      <button class="mx-1 text-primary-content bg-base-300 px-3 rounded-md my-2" @click="editor.chain().focus().toggleBulletList().run()" :class="{ 'is-active': editor.isActive('bulletList') }">
        bullet list
      </button>
      <button class="mx-1 text-primary-content bg-base-300 px-3 rounded-md my-2" @click="editor.chain().focus().toggleOrderedList().run()" :class="{ 'is-active': editor.isActive('orderedList') }">
        ordered list
      </button>
      <button class="mx-1 text-primary-content bg-base-300 px-3 rounded-md my-2" @click="editor.chain().focus().toggleCodeBlock().run()" :class="{ 'is-active': editor.isActive('codeBlock') }">
        code block
      </button>
      <button class="mx-1 text-primary-content bg-base-300 px-3 rounded-md my-2" @click="editor.chain().focus().toggleBlockquote().run()" :class="{ 'is-active': editor.isActive('blockquote') }">
        blockquote
      </button>
      <button class="mx-1 text-primary-content bg-base-300 px-3 rounded-md my-2" @click="editor.chain().focus().setHorizontalRule().run()">
        horizontal rule
      </button>
      <!-- <button class="mx-1 text-primary-content bg-base3-300 px-3 rounded-md my-2" @click="editor.chain().focus().setHardBreak().run()">
        hard break
      </button> -->
      <button class="mx-1 text-primary-content bg-base-300 px-3 rounded-md my-2" @click="editor.chain().focus().undo().run()">
        undo
      </button>
      <button class="mx-1 text-primary-content bg-base-300 px-3 rounded-md my-2" @click="editor.chain().focus().redo().run()">
        redo
      </button>
    </div>
    <editor-content class=" mt-10 " :editor="editor" />
  </div>  
  <!-- <div id="content" class="text-primary mt-10 mx-auto w-1/2 text-xl"  v-html="text"></div> -->
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Document from '@tiptap/extension-document'
import Paragraph from '@tiptap/extension-paragraph'
import Text from '@tiptap/extension-text'
import CodeBlock from '@tiptap/extension-code-block'
import Image from '@tiptap/extension-image'
import { Editor, BubbleMenu,EditorContent, } from '@tiptap/vue-3'
import StarterKit from '@tiptap/starter-kit'
import Typography from '@tiptap/extension-typography'
export default defineComponent({
  name:'Blog',
  components:{
    EditorContent,
    BubbleMenu
  },
  props:{
    content:String
  },
  data(){
    return{
      editor:null as any,
      text:""
    }
  },
  mounted(){
    this.editor = new Editor({
      content:this.$props.content,  
      extensions: [
        StarterKit,
        Document,
        Paragraph,
        Text,
        CodeBlock,
        Image,
        Typography
      ],
      editable:true,
      onUpdate:(d)=>{
        this.$emit('contentUpdated',d.editor.getHTML())
      }
    })
  },
  watch: {
    content(value) {
      const isSame = this.editor.getHTML() === value

      if (isSame) {
        return
      }

      this.editor.commands.setContent(value, false)
    },
  },
  beforeUnmount() {
    this.editor?.destroy()
  },
  methods: {
    addImage() {
      const url = window.prompt("URL")

      if (url) {
        this.editor.chain().focus().setImage({ src: url }).run()
      }
    },
  },
  emits:{
    contentUpdated:(content:string)=>true
  }
})
</script>


<style>
.ProseMirror{
  padding:10px;
  background-color: #171212;
  color: white; 
  height: 35rem;
  overflow: auto;   
}

.ProseMirror p{
  font-size: 1rem;
}

.ProseMirror :focus{
  all:revert
}

.ProseMirror blockquote{
  all:revert
}

.ProseMirror *{
  all:revert
}


.ProseMirror img {
    max-width: 100%;
    height: auto;
  }

</style>