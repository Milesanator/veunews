import axios from "~/plugins/axios"

export const state = () => ({
  items: [
  ],
  darkMode: false,
  correct: false,
  birdSpeaking: false,
  failed: false
}) 

export const mutations = {
  setItems(state, items) {
    state.items = items
  },
  toggleMode(state) {
    state.darkMode = !state.darkMode
  },
  toggleBird(state) {
    state.birdSpeaking = !state.birdSpeaking
  },
  setCorrect(state) {
    state.correct = true
  },
  setFailed(state) {
    state.failed = true
  },
  unsetFailed(state) {
    state.failed = false
  }
}

export const actions = {
  async LOAD_ITEMS({ commit }, payload) {
    const res = await axios.get(payload)
    const ids = res.data
    const tenIds = ids.slice(0, 10)
    const itemPromises = tenIds.map(id => axios.get(`item/${id}.json`))
    const itemResp = await Promise.all(itemPromises)
    const items = itemResp.map((res => res.data))
    let realItems = items.map(
      item => item ? item : {
        id: -1,
        title: "Failed to load"
      }
    )

    if (payload === "jobstories.json") {
      realItems = realItems.map(
        item => {
          const title = item.title

          item.title = title + ' frog'

          return item
        }
      )
    }

    if (payload === 'topstories.json') {
      const random = Math.floor(Math.random() * Math.floor(10))

      realItems = realItems.map((item, index) => {
        if (index === random) {
          item.by = 'milesanator'
        }
        return item
      })
    }

    commit("setItems", realItems)
  },

  toggleMode({ commit }) {
    commit("toggleMode")
  },

  checkAnswer({commit}, answer) {
    console.log(answer)
    if (answer && answer.toLowerCase() === 'banana frog murder') {
      commit('setCorrect')
    } else {
      commit('setFailed')

      setTimeout(() => {
        commit('unsetFailed')
      }, 3000);
    }
  },

  toggleBird({commit}) {
    commit("toggleBird")
  }
}