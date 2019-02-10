import Vue from 'vue'
import Vuex from 'vuex'
import comment from './modules/comment'
import action from './modules/action'

Vue.use(Vuex)

const debug = process.env.NODE_ENV !== 'production'

export default new Vuex.Store({
    modules:{
        comment,
        action
    },
    strict: debug
})