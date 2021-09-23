import Vue from 'vue'
import Vuex from 'vuex'
import forecast from '@/store/modules/forecast'
import userData from '@/store/modules/userData'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    forecast,
    userData
  }
})
