<template>
  <div class="border-gray-300 bg-opacity-60 border rounded-lg shadow-md">
    <!-- Text Editor -->
    <div
      ref="editor"
      class="w-full h-48 p-1 focus:outline-none rounded-b-lg focus:border-blue-400"
    ></div>
  </div>
</template>

<script>
import Quill from "quill";
import "quill/dist/quill.snow.css";

export default {
  name: "QuillEditor",
  mounted() {
    this.quill = new Quill(this.$refs.editor, {
      theme: "snow",
      modules: {
        toolbar: [
          [{ header: [1, 2, false] }],
          ["bold", "italic", "underline"],
          [{ list: "ordered" }, { list: "bullet" }],
          ["link", "image"],
        ],
      },
      placeholder: "   Start typing here...",
    });
  },
  methods: {
    getContent() {
      // Retrieve the editor content
      return this.quill.root.innerHTML;
    },
    setContent(content) {
      // Set the editor content
      this.quill.root.innerHTML = content;
    },
  },
};
</script>

<style scope>
.ql-toolbar.ql-snow + .ql-container.ql-snow {
  border-bottom-left-radius: 0.5rem;
  border-bottom-right-radius: 0.5rem;
}

.ql-editor .ql-blank {
  border-bottom-left-radius: 0.5rem;
  border-bottom-right-radius: 0.5rem;
}

.ql-toolbar.ql-snow {
  border-top-left-radius: 0.5rem;
  border-top-right-radius: 0.5rem;
  background-color: #f5eff4;
  border: 1px solid #ccc;
  box-sizing: border-box;
  font-family: "Helvetica Neue", "Helvetica", "Arial", sans-serif;
  padding: 8px;
}
</style>
