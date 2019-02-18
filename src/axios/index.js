export default function(Vue){
    return {
        validateMeetingId: function(meetingId){
            return Vue.axios.get('/meeting/' + meetingId)
        }
    }
}