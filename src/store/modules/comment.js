import {SET_COMMENT} from '@/store/mutations.types'
import constants from '@/constants'
import {uuid} from 'vue-uuid'
//init state
const state = {
    wellComments:[],
    notWellComments:[],
    suggestionComments:[]
}

// getters
const getters = {

}

// mutations, only manage state data changed, no business logic
const mutations = {
    [SET_COMMENT](state, commentJson){
        commentJson.commentStore.push({id: commentJson.id, content: commentJson.commentContent})
    }
}

// actions, business logic here
const actions = {
    addComment({commit}, payload){
        let commentJson = {
            id: uuid.v1()
        };
        if(payload.commentType === constants.commentType.well){
            commentJson.commentStore = state.wellComments;
        }
        if(payload.commentType === constants.commentType.notWell){
            commentJson.commentStore = state.notWellComments;
        }
        if(payload.commentType === constants.commentType.suggestion){
            commentJson.commentStore = state.suggestionComments;
        }
        commentJson.commentContent = payload.commentContent;
        commit(SET_COMMENT, commentJson);
    }
}

export default {
    namespaced: true,
    state,
    getters,
    mutations,
    actions
}