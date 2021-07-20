//state
export const state =
  () => ({
    users: []
  })

//getters
export const getters = {}

//actions
//actions are asynchronous. used to fetch or send data from or to an api
//we commit to mutations which then updates the state in return
export const actions = {
  async getProblems() {
    const response = await this.$axios.get('/problem')
    console.log(response)
  }

}

//mutations
//synchronous
//mutations updates the state
export const mutations = {}
