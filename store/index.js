import axios from "~/plugins/axios"

export const state = () => ({
  items: [
  ]
}) 

export const mutations = {
  setItems(state, items) {
    state.items = items
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
    const realItems = items.map(
      item => item ? item : {
        id: -1,
        title: "Failed to load"
      }
    )

    commit("setItems", realItems)
  }
}