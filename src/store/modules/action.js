
import {uuid} from 'vue-uuid'
import {SET_ACTION, REMOVE_ACTION, SET_ACTIONS} from '@/store/mutations.types'
const state = {
    allActions:[]
}

const getters = {

}

const mutations = {
    [SET_ACTION](state, {actionId, actionContent, meetingId}){
        state.allActions.push({actionId, actionContent, meetingId});
    },
    [REMOVE_ACTION](state, {index}){
        state.allActions.splice(index, 1);
    },
    [SET_ACTIONS](state, allActions){
        state.allActions = allActions
    }
}

const actions = {
    addAction({commit}, {actionContent, meetingId}){
        let actionId = uuid.v1();
        let actionObj = {actionId, actionContent, meetingId};
        this._vm.axios.post('/action', actionObj).then(result => {
            if(result.data.status == 0){
                commit(SET_ACTION, actionObj);
            }
        })
    },
    deleteAction({commit}, {index, actionId}){
        this._vm.axios.delete('/action/' + actionId).then(result => {
            if(result.data.status === 0){
                commit(REMOVE_ACTION, {index})
            }
        })
        
    },
    getAllActions({commit},{meetingId}){
        this._vm.axios.get('/action/' + meetingId).then(result => {
            commit(SET_ACTIONS, result.data)
        })
    }
}

export default {
    namespaced: true,
    state,
    getters,
    mutations,
    actions
}