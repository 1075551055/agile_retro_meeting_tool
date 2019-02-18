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
        state.allComments.push(commentPayload.commentObj);
    },
    [CHANGE_COMMENT_TO_ANOTHER_COMMENTTYPE](state, {commentId, toCommentType}){
        state.allComments.filter(item => item.commentId === commentId)[0].commentType = toCommentType;
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
        //ajax: update db
        this._vm.axios.put('/comment/' + commentId, {commentId, commentType: toCommentType}).then(result => {
            console.log(result)
            commit(CHANGE_COMMENT_TO_ANOTHER_COMMENTTYPE, {commentId, toCommentType});
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