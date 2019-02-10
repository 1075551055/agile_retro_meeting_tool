
import {uuid} from 'vue-uuid'
import {SET_ACTION, REMOVE_ACTION} from '@/store/mutations.types'
const state = {
    allActions:[]
}

const getters = {

}

const mutations = {
    [SET_ACTION](state, {actionId, actionContent}){
        state.allActions.push({actionId, actionContent});
    },
    [REMOVE_ACTION](state, {index}){
        state.allActions.splice(index, 1);
    }
}

const actions = {
    addAction({commit}, {actionContent}){
        let actionId = uuid.v1();
        commit(SET_ACTION, {actionId, actionContent});
    },
    deleteAction({commit}, {index}){
        commit(REMOVE_ACTION, {index})
    }
}

export default {
    namespaced: true,
    state,
    getters,
    mutations,
    actions
}