import Vuex from 'vuex'
import mutations from './mutations.js'
import actions from './actions'

const state = {}

const store = () => {
  return new Vuex.Store({
    state,
    actions,
    mutations
  })
}

export default store
