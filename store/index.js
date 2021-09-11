//state

export const state =
  () => ({
    allProblems: [],
    allSolutions: [],
    sortedProblems: [],
    currProblem: {},
    active: false

  })

//getters
export const getters = {
  getProblems: (state) => {
    return state.sortedProblems
  },
  getSelectedPslug: (state) => {
    return state.selectedProblemSlug
  }
}

//ACTIONS
//actions are asynchronous. used to fetch or send data from or to an api
//we commit to mutations which then updates the state in return

export const actions = {
  setSPslug({ commit }, id) {
    for (let problem of this.state.allProblems) {
      if (problem.id === id) {
        for (let solution of this.state.allSolutions) {
          if (solution.problem.id === id) {
            problem.solution = solution.solution
            problem.language = solution.language
            commit('setCurrProblem', problem)
            return
          }
        }
        problem.solution = 'No Solution'
        problem.language = ''
        commit('setCurrProblem', problem)
      }
    }
  },
  async getAllData(context){
    this.$axios.setBaseURL('http://localhost:8000/')
    const token = this.$axios.setHeader('Authorization',this.$auth.$storage.getUniversal('_token.local'))

    const response1 = await this.$axios.get('/problem/sorted')
    context.commit('sortProblembyTopic', response1.data ,{headers: {
        'Authorization': 'Bearer ' + token
      }})

    let response2 = await this.$axios.get('/solution/')
    context.commit('allSolutions', response2.data)

    let response3 = await this.$axios.get('/problem')
    context.commit('allProblems', response3.data)
  },
   nuxtServerInit(context, { res, redirect }) {
    if (!this.$auth.loggedIn) {
      redirect('/login')
    }
  }

}
//mutations
//synchronous
//mutations updates the state
export const mutations = {
  allProblems(state, problem) {
    this.state.allProblems = problem
  },
  allSolutions(state, solution) {
    this.state.allSolutions = solution
  },
  sortProblembyTopic(state, problem) {
    this.state.sortedProblems = problem
  },
  setCurrProblem(state, data) {
    this.state.currProblem = data
    this.state.active = true
  }

}
