import Vue from 'vue'
import Vuex from 'vuex'


Vue.use(Vuex)

const state = {
  passwd:null,
  account:null,
  amount:null,
  login:false,
  operate:0,
  EOS:null
}

export default new Vuex.Store({
  state
})
