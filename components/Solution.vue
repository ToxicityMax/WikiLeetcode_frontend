<template>
    <v-container fluid class='ma-3 pa-9'>
      <v-row v-if='active' align='start' justify='space-around'>
        <v-col cols='12' lg='6' class='mb-0 '>
          <vue-simple-markdown class='problem' :style='{height:probHeight}'
                               :source='currProblem.markdown'></vue-simple-markdown>
        </v-col>
        <v-col cols='12' lg='6' class='solution'>
          <div class='text-h5 font-weight-medium'>Solution:
          </div>
          <v-btn elevation='5' class='cyan accent-3'
                 fab large outlined fixed right bottom
                 to='/update'>
            <v-icon>mdi-pencil</v-icon>
          </v-btn>
          <vue-simple-markdown :source='parsedSolution'></vue-simple-markdown>
        </v-col>
      </v-row>
      <div v-else>
        <h3>Select a problem to browse</h3>
        <h2>OR</h2>
        <v-btn text outlined ripple to='/add' color='green accent-4'>
          Add a Problem
        </v-btn>
      </div>
    </v-container>
</template>
<script>
import { mapState } from 'vuex'
export default {
  name: 'Solution',
  data() {
    return {
      probHeight: '80vh'
    }
  },
  computed: {
    parsedSolution() {
      return '```' + this.$store.state.currProblem.language + '\n' + this.$store.state.currProblem.solution + '\n```'
    },
    ...mapState(['active', 'currProblem'])
  },
  created() {
    console.log(this.$auth.$storage.getUniversal('_token.local'))
    this.$store.dispatch('getAllData')
  },
  methods: {
/*    editSolution() {
      //code to get the question and answer id
      //then navigate to edit component
    },*/
  }
}
</script>

<style>
.problem {
  height: 90vh;
  overflow-x: hidden;
  overflow: -moz-scrollbars-none;
  overflow-y: auto;
}

/*!
  Theme: Outrun Dark
  Author: Hugo Delahousse (http://github.com/hugodelahousse/)
  License: ~ MIT (or more permissive) [via base16-schemes-source]
  Maintainer: @highlightjs/core-team
  Version: 2021.05.0
*/
.markdown-body .highlight pre, .markdown-body pre {
  overflow: auto;
  font-size: 85%;
  line-height: 1.45;
  background-color: #00002a;
  color: white;
  border-radius: 3px;
}


pre code.hljs {
  display: block;
  overflow-x: auto;
  padding: 1em;

}

code.hljs {
  padding: 3px 5px;
}

.hljs {
  color: #D0D0FA;
  background: #00002A;
}

.hljs ::selection {
  color: #30305A;
}


/* purposely do not highlight these things */
.hljs-formula,
.hljs-params,
.hljs-property {
}

/* base03 - #50507A -  Comments, Invisibles, Line Highlighting */
.hljs-comment {
  color: #50507A;
}

/* base04 - #B0B0DA -  Dark Foreground (Used for status bars) */
.hljs-tag {
  color: #B0B0DA;
}

/* base05 - #D0D0FA -  Default Foreground, Caret, Delimiters, Operators */
.hljs-subst,
.hljs-punctuation,
.hljs-operator {
  color: #D0D0FA;
}

.hljs-operator {
  opacity: 0.7;
}

/* base08 - Variables, XML Tags, Markup Link Text, Markup Lists, Diff Deleted */
.hljs-bullet,
.hljs-variable,
.hljs-template-variable,
.hljs-selector-tag,
.hljs-name,
.hljs-deletion {
  color: #FF4242;
}

/* base09 - Integers, Boolean, Constants, XML Attributes, Markup Link Url */
.hljs-symbol,
.hljs-number,
.hljs-link,
.hljs-attr,
.hljs-variable.constant_,
.hljs-literal {
  color: #FC8D28;
}

/* base0A - Classes, Markup Bold, Search Text Background */
.hljs-title,
.hljs-class .hljs-title,
.hljs-title.class_ {
  color: #F3E877;
}

.hljs-strong {
  font-weight: bold;
  color: #F3E877;
}

/* base0B - Strings, Inherited Class, Markup Code, Diff Inserted */
.hljs-code,
.hljs-addition,
.hljs-title.class_.inherited__,
.hljs-string {
  color: #59F176;
}

/* base0C - Support, Regular Expressions, Escape Characters, Markup Quotes */
.hljs-built_in,
.hljs-doctag, /* guessing */
.hljs-quote,
.hljs-keyword.hljs-atrule,
.hljs-regexp {
  color: #0EF0F0;
}

/* base0D - Functions, Methods, Attribute IDs, Headings */
.hljs-function .hljs-title,
.hljs-attribute,
.ruby .hljs-property,
.hljs-title.function_,
.hljs-section {
  color: #66B0FF;
}

/* base0E - Keywords, Storage, Selector, Markup Italic, Diff Changed */
.hljs-type,
  /* .hljs-selector-id, */
  /* .hljs-selector-class, */
  /* .hljs-selector-attr, */
  /* .hljs-selector-pseudo, */
.hljs-template-tag,
.diff .hljs-meta,
.hljs-keyword {
  color: #F10596;
}

.hljs-emphasis {
  color: #F10596;
  font-style: italic;
}

/* base0F - Deprecated, Opening/Closing Embedded Language Tags, e.g. <?php ?> */
.hljs-meta,
  /*
    prevent top level .keyword and .string scopes
    from leaking into meta by accident
  */
.hljs-meta .hljs-keyword,
.hljs-meta .hljs-string {
  color: #F003EF;
}

.hljs-meta .hljs-keyword,
  /* for v10 compatible themes */
.hljs-meta-keyword {
  font-weight: bold;
}

</style>
