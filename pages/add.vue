<template>
  <v-container>
    <v-form ref='addProblem'>
      <v-text-field
        v-model='problem_slug'
        style='max-width: 350px'
        class='icon pt-5'
        label='Problem Name'
        :rules='[rules.required]'
        outlined color='black' :prepend-inner-icon='Icon' solo
        hint='Example: https://leetcode.com/problems/two-sum/'
      ></v-text-field>
      <v-select
        v-model='model.language'
        class='lang-choices'
        :items='languageChoice'
        label='Language'
        :rules='[rules.required]'
        :menu-props='{ maxHeight:200 }'
        outlined solo rounded color='black'>
      </v-select>
<!--      <v-textarea-->
<!--        v-model='model.solution'-->
<!--        outlined-->
<!--        no-resize-->
<!--        solo-->
<!--        color='black'-->
<!--        :rules='[rules.required]'-->
<!--        label='Solution'-->
<!--        height='55vh'>-->
<!--      </v-textarea>-->
        <no-ssr placeholder='Loading...'>
          <codemirror v-model='model.solution'
                      :code='test'
                      :options='cmOption'
                      @cursorActivity='onCmCursorActivity'
                      @ready='onCmReady'
                      @focus='onCmFocus'
                      @blur='onCmBlur'>
          </codemirror>
        </no-ssr>
      <v-btn outlined fixed right bottom elevation='8' color='cyan accent-4' @click='Submit'>Submit</v-btn>
    </v-form>
  </v-container>
</template>
<script>


export default {
  name: 'Add',
  data() {
    return {
      rules: {
        required: value => !!value || 'Required.'
      },
      icon: '',
      test: 'const a =5',
      model: {
        problem_slug: '',
        solution: '',
        language: ''
      },
      languageChoice: [
        { text: 'C++', value: 'cpp' },
        { text: 'Java', value: 'java' },
        { text: 'Python', value: 'python' },
        { text: 'Python3', value: 'python3' },
        { text: 'C', value: 'c' },
        { text: 'C#', value: 'csharp' },
        { text: 'Go', value: 'golang' },
        { text: 'JavaScript', value: 'javascript' },
        { text: 'Ruby', value: 'ruby' },
        { text: 'Swift', value: 'swift' },
        { text: 'Scala', value: 'scala' },
        { text: 'Kotlin', value: 'kotlin' },
        { text: 'Rust', value: 'rust' },
        { text: 'PHP', value: 'php' },
        { text: 'TypeScript', value: 'typescript' },
        { text: 'Racket', value: 'racket' }
      ],
      cmOption: {
        tabSize: 4,
        styleActiveLine: true,
        lineNumbers: true,
        line: true,
        mode: 'text/x-vue',
        theme: 'base16-dark'
      }
    }
  },
  computed: {
    Icon() {
      return this.icon
    },
    problem_slug: {
      get() {
        return this.model.problem_slug
      },
      set(value) {
        if (this.isURL(value)) {
          value = value.split('/problems/')[1]
          if (value[value.length - 1] === '/')
            value = value.substring(0, value.length - 1)
          this.icon = 'mdi-check'
        } else {
          this.icon = 'mdi-window-close'
        }
        this.model.problem_slug = value
      }
    }
  },
  methods: {
    isURL(string) {
      return !!(string.match('^(?:http(s)?:\\/\\/)?[\\w.-]+(?:\\.[\\w\\.-]+)+[\\w\\-\\._~:/?#[\\]@!\\$&\'\\(\\)\\*\\+,;=.]+$'))
    },
    async Submit() {
      if (this.$refs.addProblem.validate()) {
        //SEND A POST REQUEST TO BACKEND SERVER TO ADD THE PROBLEM AND SOLUTION
        console.log(this.model.problem_slug + ' ' + this.model.solution + ' ' + this.model.language)
        let response = await this.$axios.post('solution/', this.model)
        console.log(response.data)
      }
    },
    onCmCursorActivity(codemirror) {
      console.log('onCmCursorActivity', codemirror)
    },
    onCmReady(codemirror) {
      console.log('onCmReady', codemirror)
    },
    onCmFocus(codemirror) {
      console.log('onCmFocus', codemirror)
    },
    onCmBlur(codemirror) {
      console.log('onCmBlur', codemirror)
    }
  }
}
</script>
<style lang='scss' scoped>
.lang-choices {
  width: 175px;
}

.example {
  display: flex;
  height: 100%;

  .codemirror,
  .pre {
    width: 50%;
    height: 100%;
    margin: 0;
    overflow: auto;
  }

  .pre {
    display: block;
    padding: 1rem;
    line-height: 1.6;
    word-break: break-all;
    word-wrap: break-word;
  }
}
</style>
