<template>
  <v-container>
    <v-row align=' space-around' justify='space-around'>
      <vue-simple-markdown :source='problem'></vue-simple-markdown>
      <div class='text-h5 font-weight-medium'>Solution:</div>
      <v-container fluid style='background-color: ghostwhite'>
        <highlight-code lang='cpp'>{{ solution }}</highlight-code>
      </v-container>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: 'Solution',
  components: {},
  data() {
    return {
      problem: '### Count and Say\n\nThe **count-and-say** sequence is a sequence of digit strings defined by the recursive formula:\n\n\n* `countAndSay(1) = "1"`\n* `countAndSay(n)` is the way you would "say" the digit string from `countAndSay(n-1)`, which is then converted into a different digit string.\n\n\nTo determine how you "say" a digit string, split it into the **minimal** number of groups so that each group is a contiguous section all of the **same character.** Then for each group, say the number of characters, then say the character. To convert the saying into a digit string, replace the counts with a number and concatenate every saying.\n\n\nFor example, the saying and conversion for digit string `"3322251"`:\n\n\n![](https://assets.leetcode.com/uploads/2020/10/23/countandsay.jpg)\nGiven a positive integer `n`, return *the* `nth` *term of the **count-and-say** sequence*.\n\n\n \n\n\n**Example 1:**\n\n\n\n```\n\n**Input:** n = 1\n**Output:** "1"\n**Explanation:** This is the base case.\n\n```\n\n**Example 2:**\n\n\n\n```\n\n**Input:** n = 4\n**Output:** "1211"\n**Explanation:**\ncountAndSay(1) = "1"\ncountAndSay(2) = say "1" = one 1 = "11"\ncountAndSay(3) = say "11" = two 1\'s = "21"\ncountAndSay(4) = say "21" = one 2 + one 1 = "12" + "11" = "1211"\n\n```\n\n \n\n\n**Constraints:**\n\n\n* `1 <= n <= 30`\n\n\n',
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
        '};'
    }
  },
  computed: {}
}
</script>

<style scoped>

</style>
