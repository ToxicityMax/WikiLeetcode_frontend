<template>
  <div>
    <v-container fluid class='ma-3 pa-2'>
      <v-row align='left' justify='space-around'>
        <v-col cols='12' lg='6' class='mb-0 pa-0'>
          <vue-simple-markdown class='problem' :style='{height:probHeight}' :source='problem'></vue-simple-markdown>
        </v-col>
        <v-col cols='12' lg='6' class='solution'>
          <div class='text-h5 font-weight-medium'>Solution:</div>
          <vue-simple-markdown :source='parsedSolution'></vue-simple-markdown>
        </v-col>
      </v-row>

    </v-container>

  </div>
</template>

<script>
export default {
  name: 'Solution',
  components: {},
  data() {
    return {
      problem: '### String to Integer (atoi)\nImplement the `myAtoi(string s)` function, which converts a string to a 32-bit signed integer (similar to C/C++\'s `atoi` function).\n\n\nThe algorithm for `myAtoi(string s)` is as follows:\n\n\n1. Read in and ignore any leading whitespace.\n2. Check if the next character (if not already at the end of the string) is `\'-\'` or `\'+\'`. Read this character in if it is either. This determines if the final result is negative or positive respectively. Assume the result is positive if neither is present.\n3. Read in next the characters until the next non-digit charcter or the end of the input is reached. The rest of the string is ignored.\n4. Convert these digits into an integer (i.e. `"123" -> 123`, `"0032" -> 32`). If no digits were read, then the integer is `0`. Change the sign as necessary (from step 2).\n5. If the integer is out of the 32-bit signed integer range `[-231, 231 - 1]`, then clamp the integer so that it remains in the range. Specifically, integers less than `-231` should be clamped to `-231`, and integers greater than `231 - 1` should be clamped to `231 - 1`.\n6. Return the integer as the final result.\n\n\n**Note:**\n\n\n* Only the space character `\' \'` is considered a whitespace character.\n* **Do not ignore** any characters other than the leading whitespace or the rest of the string after the digits.\n\n\n \n\n\n**Example 1:**\n\n\n\n```\n\n**Input:** s = "42"\n**Output:** 42\n**Explanation:** The underlined characters are what is read in, the caret is the current reader position.\nStep 1: "42" (no characters read because there is no leading whitespace)\n         ^\nStep 2: "42" (no characters read because there is neither a \'-\' nor \'+\')\n         ^\nStep 3: "42" ("42" is read in)\n           ^\nThe parsed integer is 42.\nSince 42 is in the range [-231, 231 - 1], the final result is 42.\n\n```\n\n**Example 2:**\n\n\n\n```\n\n**Input:** s = "   -42"\n**Output:** -42\n**Explanation:**\nStep 1: " -42" (leading whitespace is read and ignored)\n            ^\nStep 2: "   -42" (\'-\' is read, so the result should be negative)\n             ^\nStep 3: "   -42" ("42" is read in)\n               ^\nThe parsed integer is -42.\nSince -42 is in the range [-231, 231 - 1], the final result is -42.\n\n```\n\n**Example 3:**\n\n\n\n```\n\n**Input:** s = "4193 with words"\n**Output:** 4193\n**Explanation:**\nStep 1: "4193 with words" (no characters read because there is no leading whitespace)\n         ^\nStep 2: "4193 with words" (no characters read because there is neither a \'-\' nor \'+\')\n         ^\nStep 3: "4193 with words" ("4193" is read in; reading stops because the next character is a non-digit)\n             ^\nThe parsed integer is 4193.\nSince 4193 is in the range [-231, 231 - 1], the final result is 4193.\n\n```\n\n**Example 4:**\n\n\n\n```\n\n**Input:** s = "words and 987"\n**Output:** 0\n**Explanation:**Step 1: "words and 987" (no characters read because there is no leading whitespace)\n         ^\nStep 2: "words and 987" (no characters read because there is neither a \'-\' nor \'+\')\n         ^\nStep 3: "words and 987" (reading stops immediately because there is a non-digit \'w\')\n         ^\nThe parsed integer is 0 because no digits were read.\nSince 0 is in the range [-231, 231 - 1], the final result is 0.\n\n```\n\n**Example 5:**\n\n\n\n```\n\n**Input:** s = "-91283472332"\n**Output:** -2147483648\n**Explanation:**Step 1: "-91283472332" (no characters read because there is no leading whitespace)\n         ^\nStep 2: "-91283472332" (\'-\' is read, so the result should be negative)\n          ^\nStep 3: "-91283472332" ("91283472332" is read in)\n                     ^\nThe parsed integer is -91283472332.\nSince -91283472332 is less than the lower bound of the range [-231, 231 - 1], the final result is clamped to -231 = -2147483648.\n\n```\n\n \n\n\n**Constraints:**\n\n\n* `0 <= s.length <= 200`\n* `s` consists of English letters (lower-case and upper-case), digits (`0-9`), `\' \'`, `\'+\'`, `\'-\'`, and `\'.\'`.\n\n\n',
      solution: '/**\n' +
        ' * Definition for a binary tree node.\n' +
        ' * struct TreeNode {\n' +
        ' *     int val;\n' +
        ' *     TreeNode *left;\n' +
        ' *     TreeNode *right;\n' +
        ' *     TreeNode() : val(0), left(nullptr), right(nullptr) {}\n' +
        ' *     TreeNode(int x) : val(x), left(nullptr), right(nullptr) {}\n' +
        ' *     TreeNode(int x, TreeNode *left, TreeNode *right) : val(x), left(left), right(right) {}\n' +
        ' * };\n' +
        ' */\n' +
        'class Solution {\n' +
        'public:\n' +
        '        bool ans =true;\n' +
        '        int depth(TreeNode *root) {\n' +
        '            if (root == nullptr)\n' +
        '                return 0;\n' +
        '            int lh = depth(root->left);\n' +
        '            if(ans==false) return 0;\n' +
        '            int rh = depth(root->right);\n' +
        '\n' +
        '            if (abs(lh - rh) > 1)\n' +
        '                 ans = false;\n' +
        '            return 1 + max(lh, rh);\n' +
        '            \n' +
        '        }\n' +
        '    bool isBalanced(TreeNode* root) {\n' +
        '        if(!root) return true;\n' +
        '        depth(root);\n' +
        '        return ans;\n' +
        '    }\n' +
        '};',
      probHeight: '90vh'
    }
  },
  computed: {
    parsedSolution() {
      return '```cpp\n' + this.solution + '\n```'
    }
  },
  beforeMount() {
    this.updateProblemHeight()
    window.addEventListener('resize', this.updateProblemHeight)
  },
  methods: {
    updateProblemHeight() {
      const solHeight = document.querySelector('.solution').offsetHeight
      const solHeightinVh = String(Math.trunc(100 * solHeight / window.innerHeight)) + 'vh'
      if (screen.width >= 1264) {
        this.probHeight = solHeightinVh
      }
    }
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
