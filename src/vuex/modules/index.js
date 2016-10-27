import {
  SET_HEADER_TITLE
} from '../mutation-types'

const state = {
  title: 'default',
  info: {
    name: ''
  }
}

const mutations = {
  [SET_HEADER_TITLE] (state, newTitle) {
    state.title = newTitle
  }
}

export default {
  state,
  mutations
}
