<template>
  <prism-editor v-model='USolution' class='my-editor' :highlight='highlighter'></prism-editor>

</template>

<script>
import { PrismEditor } from 'vue-prism-editor/'
import 'vue-prism-editor/dist/prismeditor.min.css' // import the styles somewhere

// import highlighting library (you can use any library you want just return html string)
import { highlight, languages } from 'prismjs/components/prism-core'
import 'prismjs/components/prism-clike'
import 'prismjs/components/prism-c'
import 'prismjs/components/prism-cpp'
import 'prismjs/themes/prism-tomorrow.css'

export default {
  name: 'PrismEditor',
  components: {
    PrismEditor
  },
  props: {
    solution: {
      default: ' ',
      type: String
    }
  },
  data() {
    return {
      USolution: this.solution
    }
  },
  methods: {
    highlighter() {
      return highlight(this.solution, languages.cpp)
    }
  }
}
</script>

<style scoped>
.my-editor {
  /* we dont use `language-` classes anymore so thats why we need to add background and text color manually */
  background: #2d2d2d;
  color: #ccc;

  /* you must provide font-family font-size line-height. Example: */
  font-family: Fira code, Fira Mono, Consolas, Menlo, Courier, monospace;
  font-size: 14px;
  line-height: 1.5;
  padding: 5px;
}

/* optional class for removing the outline */
.prism-editor__textarea:focus {
  outline: none;
}
</style>
