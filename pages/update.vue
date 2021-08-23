<template>
  <v-container>
      <v-textarea
        v-model='model.solution'
        outlined
        no-resize
        solo
        color='black'
        label='Solution'
        height='55vh'>
      </v-textarea>
      <v-btn outlined elevation='8' @click='Submit'>Submit</v-btn>
  </v-container>
</template>
<script>


export default {
  name: 'Add',
  data() {
    return {
      model: {
        problem_slug: '',
        solution: '',
        language: ''
      },
    }
  },
  computed: {
  },
  created(){
    this.model.solution = this.$store.state.currProblem.solution
  },
  methods: {
    async Submit() {
      if (this.$refs.addProblem.validate()) {
        //SEND A POST REQUEST TO BACKEND SERVER TO ADD THE PROBLEM AND SOLUTION
        console.log(this.model.problem_slug + " " + this.model.solution + " "+ this.model.language)
        let response = await this.$axios.post('solution/',this.model)
        console.log(response.data)      }
    }
  }


}
</script>

<style scoped>
.lang-choices {
  width: 175px;
}
</style>
