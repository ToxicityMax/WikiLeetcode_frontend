<template>
  <v-navigation-drawer ref='drawer' :width='navigation.width' :value='drawer' dark app clipped hide-overlay>
    <v-treeview class='pa-12' activatable transition hoverable :items=test rounded>
    </v-treeview>
  </v-navigation-drawer>
</template>

<script>
export default {
  name: 'NavDrawer',
  props: {
    drawer: Boolean
  },
  data() {
    return {
      test: [
        {
          id: 1,
          name: 'Array',
          children: [
            {
              'id': 6,
              'name': '4Sum',
              'problem_slug': '4sum',
              'difficulty': 'Medium',
              'topic': 'Array',
              'related_topics': {
                'name': 'Sorting',
                'slug': 'sorting'
              },
              'markdown': '### 4Sum\n\nGiven an array `nums` of `n` integers, return *an array of all the **unique** quadruplets* `[nums[a], nums[b], nums[c], nums[d]]` such that:\n\n\n* `0 <= a, b, c, d < n`\n* `a`, `b`, `c`, and `d` are **distinct**.\n* `nums[a] + nums[b] + nums[c] + nums[d] == target`\n\n\nYou may return the answer in **any order**.\n\n\n \n\n\n**Example 1:**\n\n\n\n```\n\n**Input:** nums = [1,0,-1,0,-2,2], target = 0\n**Output:** [[-2,-1,1,2],[-2,0,0,2],[-1,0,0,1]]\n\n```\n\n**Example 2:**\n\n\n\n```\n\n**Input:** nums = [2,2,2,2,2], target = 8\n**Output:** [[2,2,2,2]]\n\n```\n\n \n\n\n**Constraints:**\n\n\n* `1 <= nums.length <= 200`\n* `-109 <= nums[i] <= 109`\n* `-109 <= target <= 109`\n\n\n'
            }
          ]
        },
        {
          id: 2,
          name: 'String',
          children: [
            {
              'id': 7,
              'name': 'Count and Say',
              'problem_slug': 'count-and-say',
              'difficulty': 'Medium',
              'topic': 'String',
              'related_topics': {
                'name': 'String',
                'slug': 'string'
              },
              'markdown': '### Count and Say\n\nThe **count-and-say** sequence is a sequence of digit strings defined by the recursive formula:\n\n\n* `countAndSay(1) = "1"`\n* `countAndSay(n)` is the way you would "say" the digit string from `countAndSay(n-1)`, which is then converted into a different digit string.\n\n\nTo determine how you "say" a digit string, split it into the **minimal** number of groups so that each group is a contiguous section all of the **same character.** Then for each group, say the number of characters, then say the character. To convert the saying into a digit string, replace the counts with a number and concatenate every saying.\n\n\nFor example, the saying and conversion for digit string `"3322251"`:\n\n\n![](https://assets.leetcode.com/uploads/2020/10/23/countandsay.jpg)\nGiven a positive integer `n`, return *the* `nth` *term of the **count-and-say** sequence*.\n\n\n \n\n\n**Example 1:**\n\n\n\n```\n\n**Input:** n = 1\n**Output:** "1"\n**Explanation:** This is the base case.\n\n```\n\n**Example 2:**\n\n\n\n```\n\n**Input:** n = 4\n**Output:** "1211"\n**Explanation:**\ncountAndSay(1) = "1"\ncountAndSay(2) = say "1" = one 1 = "11"\ncountAndSay(3) = say "11" = two 1\'s = "21"\ncountAndSay(4) = say "21" = one 2 + one 1 = "12" + "11" = "1211"\n\n```\n\n \n\n\n**Constraints:**\n\n\n* `1 <= n <= 30`\n\n\n'
            },
            {
              'id': 11,
              'name': 'String to Integer (atoi)',
              'problem_slug': 'string-to-integer-atoi',
              'difficulty': 'Medium',
              'topic': 'String',
              'related_topics': {
                'name': 'String',
                'slug': 'string'
              },
              'markdown': '### String to Integer (atoi)\n\nImplement the `myAtoi(string s)` function, which converts a string to a 32-bit signed integer (similar to C/C++\'s `atoi` function).\n\n\nThe algorithm for `myAtoi(string s)` is as follows:\n\n\n1. Read in and ignore any leading whitespace.\n2. Check if the next character (if not already at the end of the string) is `\'-\'` or `\'+\'`. Read this character in if it is either. This determines if the final result is negative or positive respectively. Assume the result is positive if neither is present.\n3. Read in next the characters until the next non-digit charcter or the end of the input is reached. The rest of the string is ignored.\n4. Convert these digits into an integer (i.e. `"123" -> 123`, `"0032" -> 32`). If no digits were read, then the integer is `0`. Change the sign as necessary (from step 2).\n5. If the integer is out of the 32-bit signed integer range `[-231, 231 - 1]`, then clamp the integer so that it remains in the range. Specifically, integers less than `-231` should be clamped to `-231`, and integers greater than `231 - 1` should be clamped to `231 - 1`.\n6. Return the integer as the final result.\n\n\n**Note:**\n\n\n* Only the space character `\' \'` is considered a whitespace character.\n* **Do not ignore** any characters other than the leading whitespace or the rest of the string after the digits.\n\n\n \n\n\n**Example 1:**\n\n\n\n```\n\n**Input:** s = "42"\n**Output:** 42\n**Explanation:** The underlined characters are what is read in, the caret is the current reader position.\nStep 1: "42" (no characters read because there is no leading whitespace)\n         ^\nStep 2: "42" (no characters read because there is neither a \'-\' nor \'+\')\n         ^\nStep 3: "42" ("42" is read in)\n           ^\nThe parsed integer is 42.\nSince 42 is in the range [-231, 231 - 1], the final result is 42.\n\n```\n\n**Example 2:**\n\n\n\n```\n\n**Input:** s = "   -42"\n**Output:** -42\n**Explanation:**\nStep 1: " -42" (leading whitespace is read and ignored)\n            ^\nStep 2: "   -42" (\'-\' is read, so the result should be negative)\n             ^\nStep 3: "   -42" ("42" is read in)\n               ^\nThe parsed integer is -42.\nSince -42 is in the range [-231, 231 - 1], the final result is -42.\n\n```\n\n**Example 3:**\n\n\n\n```\n\n**Input:** s = "4193 with words"\n**Output:** 4193\n**Explanation:**\nStep 1: "4193 with words" (no characters read because there is no leading whitespace)\n         ^\nStep 2: "4193 with words" (no characters read because there is neither a \'-\' nor \'+\')\n         ^\nStep 3: "4193 with words" ("4193" is read in; reading stops because the next character is a non-digit)\n             ^\nThe parsed integer is 4193.\nSince 4193 is in the range [-231, 231 - 1], the final result is 4193.\n\n```\n\n**Example 4:**\n\n\n\n```\n\n**Input:** s = "words and 987"\n**Output:** 0\n**Explanation:**Step 1: "words and 987" (no characters read because there is no leading whitespace)\n         ^\nStep 2: "words and 987" (no characters read because there is neither a \'-\' nor \'+\')\n         ^\nStep 3: "words and 987" (reading stops immediately because there is a non-digit \'w\')\n         ^\nThe parsed integer is 0 because no digits were read.\nSince 0 is in the range [-231, 231 - 1], the final result is 0.\n\n```\n\n**Example 5:**\n\n\n\n```\n\n**Input:** s = "-91283472332"\n**Output:** -2147483648\n**Explanation:**Step 1: "-91283472332" (no characters read because there is no leading whitespace)\n         ^\nStep 2: "-91283472332" (\'-\' is read, so the result should be negative)\n          ^\nStep 3: "-91283472332" ("91283472332" is read in)\n                     ^\nThe parsed integer is -91283472332.\nSince -91283472332 is less than the lower bound of the range [-231, 231 - 1], the final result is clamped to -231 = -2147483648.\n\n```\n\n \n\n\n**Constraints:**\n\n\n* `0 <= s.length <= 200`\n* `s` consists of English letters (lower-case and upper-case), digits (`0-9`), `\' \'`, `\'+\'`, `\'-\'`, and `\'.\'`.\n\n\n'
            }
          ]
        },
        {
          id: 3,
          name: 'Hash Table',
          children: [
            {
              'id': 8,
              'name': 'Happy Number',
              'problem_slug': 'happy-number',
              'difficulty': 'Easy',
              'topic': 'Hash Table',
              'related_topics': {
                'name': 'Two Pointers',
                'slug': 'two-pointers'
              },
              'markdown': '### Happy Number\n\nWrite an algorithm to determine if a number `n` is happy.\n\n\nA **happy number** is a number defined by the following process:\n\n\n* Starting with any positive integer, replace the number by the sum of the squares of its digits.\n* Repeat the process until the number equals 1 (where it will stay), or it **loops endlessly in a cycle** which does not include 1.\n* Those numbers for which this process **ends in 1** are happy.\n\n\nReturn `true` *if* `n` *is a happy number, and* `false` *if not*.\n\n\n \n\n\n**Example 1:**\n\n\n\n```\n\n**Input:** n = 19\n**Output:** true\n**Explanation:**\n12 + 92 = 82\n82 + 22 = 68\n62 + 82 = 100\n12 + 02 + 02 = 1\n\n```\n\n**Example 2:**\n\n\n\n```\n\n**Input:** n = 2\n**Output:** false\n\n```\n\n \n\n\n**Constraints:**\n\n\n* `1 <= n <= 231 - 1`\n\n\n'
            },
            {
              'id': 10,
              'name': 'Integer to Roman',
              'problem_slug': 'integer-to-roman',
              'difficulty': 'Medium',
              'topic': 'Hash Table',
              'related_topics': {
                'name': 'String',
                'slug': 'string'
              },
              'markdown': '### Integer to Roman\n\nRoman numerals are represented by seven different symbols: `I`, `V`, `X`, `L`, `C`, `D` and `M`.\n\n\n\n```\n\n**Symbol**       **Value**\nI             1\nV             5\nX             10\nL             50\nC             100\nD             500\nM             1000\n```\n\nFor example, `2` is written as `II` in Roman numeral, just two one\'s added together. `12` is written as `XII`, which is simply `X + II`. The number `27` is written as `XXVII`, which is `XX + V + II`.\n\n\nRoman numerals are usually written largest to smallest from left to right. However, the numeral for four is not `IIII`. Instead, the number four is written as `IV`. Because the one is before the five we subtract it making four. The same principle applies to the number nine, which is written as `IX`. There are six instances where subtraction is used:\n\n\n* `I` can be placed before `V` (5) and `X` (10) to make 4 and 9.\n* `X` can be placed before `L` (50) and `C` (100) to make 40 and 90.\n* `C` can be placed before `D` (500) and `M` (1000) to make 400 and 900.\n\n\nGiven an integer, convert it to a roman numeral.\n\n\n \n\n\n**Example 1:**\n\n\n\n```\n\n**Input:** num = 3\n**Output:** "III"\n\n```\n\n**Example 2:**\n\n\n\n```\n\n**Input:** num = 4\n**Output:** "IV"\n\n```\n\n**Example 3:**\n\n\n\n```\n\n**Input:** num = 9\n**Output:** "IX"\n\n```\n\n**Example 4:**\n\n\n\n```\n\n**Input:** num = 58\n**Output:** "LVIII"\n**Explanation:** L = 50, V = 5, III = 3.\n\n```\n\n**Example 5:**\n\n\n\n```\n\n**Input:** num = 1994\n**Output:** "MCMXCIV"\n**Explanation:** M = 1000, CM = 900, XC = 90 and IV = 4.\n\n```\n\n \n\n\n**Constraints:**\n\n\n* `1 <= num <= 3999`\n\n\n'
            }
          ]
        },
        {
          id: 4,
          name: 'Linked List',
          children: [
            {
              'id': 9,
              'name': 'Remove Linked List Elements',
              'problem_slug': 'remove-linked-list-elements',
              'difficulty': 'Easy',
              'topic': 'Linked List',
              'related_topics': {
                'name': 'Recursion',
                'slug': 'recursion'
              },
              'markdown': '### Remove Linked List Elements\n\nGiven the `head` of a linked list and an integer `val`, remove all the nodes of the linked list that has `Node.val == val`, and return *the new head*.\n\n\n \n\n\n**Example 1:**\n\n\n![](https://assets.leetcode.com/uploads/2021/03/06/removelinked-list.jpg)\n\n```\n\n**Input:** head = [1,2,6,3,4,5,6], val = 6\n**Output:** [1,2,3,4,5]\n\n```\n\n**Example 2:**\n\n\n\n```\n\n**Input:** head = [], val = 1\n**Output:** []\n\n```\n\n**Example 3:**\n\n\n\n```\n\n**Input:** head = [7,7,7,7], val = 7\n**Output:** []\n\n```\n\n \n\n\n**Constraints:**\n\n\n* The number of nodes in the list is in the range `[0, 104]`.\n* `1 <= Node.val <= 50`\n* `0 <= val <= 50`\n\n\n'
            }
          ]
        }
      ],
      navigation: {
        shown: false,
        width: 200,
        borderSize: 3
      }
    }
  },
  computed: {
    direction() {
      return this.navigation.shown === false ? 'Open' : 'Closed'
    }
  },
  mounted() {
    this.setBorderWidth()
    this.setEvents()
  },
  methods: {
    setBorderWidth() {
      const i = this.$refs.drawer.$el.querySelector(
        '.v-navigation-drawer__border'
      )
      i.style.width = this.navigation.borderSize + 'px'
      i.style.cursor = 'ew-resize'
      i.style.backgroundColor = 'lightskyblue'
    },
    setEvents() {
      const minSize = this.navigation.borderSize
      const el = this.$refs.drawer.$el
      const drawerBorder = el.querySelector('.v-navigation-drawer__border')
      const direction = el.classList.contains('v-navigation-drawer--right') ? 'right' : 'left'

      function resize(e) {
        document.body.style.cursor = 'ew-resize'
        const f =
          direction === 'right' ? document.body.scrollWidth - e.clientX : e.clientX
        el.style.width = f + 'px'
      }

      drawerBorder.addEventListener(
        'mousedown',
        (e) => {
          if (e.offsetX < minSize) {
            el.style.transition = 'initial'
            document.addEventListener('mousemove', resize, false)
          }
        }, false)
      document.addEventListener(
        'mouseup',
        () => {
          el.style.transition = ''
          this.navigation.width = el.style.width
          document.body.style.cursor = ''
          document.removeEventListener('mousemove', resize, false)
        },
        false
      )
    }
  }

}
</script>

<style scoped>

</style>
