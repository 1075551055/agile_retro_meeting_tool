import {SET_COMMENT, SET_ALL_COMMENTS, CHANGE_COMMENT_TO_ANOTHER_COMMENTTYPE} from '@/store/mutations.types'
import constants from '@/constants'
import {uuid} from 'vue-uuid'
//init state
const state = {
    // wellComments:[],
    // notWellComments:[],
    // suggestionComments:[],
    allComments:[]
}

// getters
const getters = {

}

// mutations, only manage state data changed, no business logic
const mutations = {
    [SET_COMMENT](state, commentPayload){
        // commentPayload.commentStore.push(commentPayload.commentObj);
        state.allComments.push(commentPayload.commentObj);
    },
    // [SET_ALL_COMMENTS](state, payload){
    //     state.allComments.push(payload.commentObj);
    // },
    [CHANGE_COMMENT_TO_ANOTHER_COMMENTTYPE](state, {commentId, toCommentType}){
        state.allComments.filter(item => item.id === commentId)[0].commentType = toCommentType;
    }
}

// actions, business logic here
const actions = {
    addComment({commit}, payload){
        let commentPayload = {
            // id: uuid.v1()
        };
        // if(payload.commentType === constants.commentType.well){
        //     commentPayload.commentStore = state.wellComments;
        // }
        // if(payload.commentType === constants.commentType.notWell){
        //     commentPayload.commentStore = state.notWellComments;
        // }
        // if(payload.commentType === constants.commentType.suggestion){
        //     commentPayload.commentStore = state.suggestionComments;
        // }
        let commentObj = {id: uuid.v1(), content: payload.commentContent, commentType: payload.commentType};
        commentPayload.commentObj = commentObj;
        commit(SET_COMMENT, commentPayload);
        // commit(SET_ALL_COMMENTS, {commentObj});
    },
    changeCommentType({commit}, {commentId, toCommentType}){
        commit(CHANGE_COMMENT_TO_ANOTHER_COMMENTTYPE, {commentId, toCommentType});
        //ajax: update db
    }
}

export default {
    namespaced: true,
    state,
    getters,
    mutations,
    actions
}