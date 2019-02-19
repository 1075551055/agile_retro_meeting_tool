import {SET_COMMENT, SET_ALL_COMMENTS, CHANGE_COMMENT_TO_ANOTHER_COMMENTTYPE, REMOVE_COMMENT} from '@/store/mutations.types'
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
        state.allComments.push(commentPayload.commentObj);
    },
    [CHANGE_COMMENT_TO_ANOTHER_COMMENTTYPE](state, {commentId, toCommentType}){
        state.allComments.filter(item => item.commentId === commentId)[0].commentType = toCommentType;
    },
    [SET_ALL_COMMENTS](state, allComments){
        state.allComments = allComments;
        // console.log(state.allComments)
    },
    [REMOVE_COMMENT](state, {commentId}){
        state.allComments = state.allComments.filter(item => item.commentId != commentId)
    }
}

// actions, business logic here
const actions = {
    addComment({commit}, payload){
        let commentPayload = {};
        let commentObj = {meetingId: payload.meetingId, commentId: uuid.v1(), content: payload.commentContent, commentType: payload.commentType};
        commentPayload.commentObj = commentObj;
        this._vm.axios.post('/comment', commentObj).then(result => {
            if(result.data.status === 0){
                commit(SET_COMMENT, commentPayload);
            }
        })
    },
    changeCommentType({commit}, {commentId, toCommentType}){
        this._vm.axios.put('/comment/' + commentId, {commentId, commentType: toCommentType}).then(result => {
            commit(CHANGE_COMMENT_TO_ANOTHER_COMMENTTYPE, {commentId, toCommentType});
        })
    },
    getAllComments({commit},{meetingId}){
        this._vm.axios.get('/comment/' + meetingId).then(result => {
            // console.log(result.data)
            commit(SET_ALL_COMMENTS, result.data)
        })
    },
    deleteCommentByCommentId({commit},{commentId}){
        this._vm.axios.delete('/comment/' + commentId).then(result => {
            commit(REMOVE_COMMENT, {commentId})
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