import { createStore } from "vuex";
import {ComponentCustomProperties} from 'vue'
const defaultState = {
  count: 0
}

interface TestState {
  count: number
}
const state: TestState = {
  count: 0
}
export default createStore({
  state(){
    return defaultState
  },
  mutations: {
    increment(state: typeof defaultState) {
      state.count += 1
    }
  },
  actions: {
    increment(context){
      context.commit('increment')
    }
  },
  getters: {
    double(state: typeof defaultState) {
      return 2 * state.count
    }
  }
})