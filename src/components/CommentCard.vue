<template>
  <div class="card">
    <!-- <b-card-group deck class="mb-3">
      <b-card border-variant="success" header="Success" align="left">
        <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      </b-card>
    </b-card-group>-->
    <!-- <div class="card-content" contenteditable="true" draggable="true"  v-on:dragstart="dragStart($event)" :id="commentId">{{commentContent}}</div> -->
    <b-form-textarea readonly
      class="card-content"
      draggable="true"
      :id="commentId"
      :ref="commentId"
      v-model="commentContent"
      :data-commenttype="commentType"
      :rows="2"
      :max-rows="6"
    ></b-form-textarea>
    <div class="operations">
      <a href="" class="iconfont icon-jiufuqianbaoicon05" @click.prevent="deleteComment(commentId)">delete</a>
      <a href="" class="iconfont icon-fuzhi" @click.prevent
       v-clipboard:copy="commentContent"
       v-clipboard:success="onCopy"
       v-clipboard:error="onError">copy</a>
    </div>
    <vue-toast ref='toast'></vue-toast>
  </div>
</template>

<script>
import constants from "@/constants";
import 'vue-toast/dist/vue-toast.min.css'
import VueToast from 'vue-toast'
export default {
  name: "CommentCard",
  data: function() {
    return {};
  },
  props: ["commentId", "commentContent", "commentType"],
  components: {
     VueToast
  },
  methods: {
    setDragStart: function() {
      // don't know why b-form-textarea does not have dragstart event? so use document.querySelector('.card-content').ondragstart instead
      //  this.$refs[this.commentId].ondragstart
      var self = this;
      this.$refs[this.commentId].$el.ondragstart = function(e) {
        e.dataTransfer.setData(
          "text/html",
          JSON.stringify({
            commentType: e.target.dataset.commenttype,
            draggedAreaType: constants.draggedAreaType.fromCard,
            commentId: self.commentId
          })
        );
      };
    },
    deleteComment(commentId){
        this.$store.dispatch('comment/deleteCommentByCommentId',{commentId})
    },
    onCopy: function(e){
      // alert('You just copied: ' + e.text)
      const toast = this.$refs.toast
      toast.setOptions({
        position: "top center"
      })
       toast.showToast('You just copied: ' + e.text, {
            theme: "success",
            timeLife : 1000
       })
    },
    onError: function (e) {
      alert('Failed to copy texts')
    }
  },
  mounted: function() {
    this.setDragStart();
  }
};
</script>

<style lang="less" scoped>
.card {
  width: 45%;
  height: 25%;
  max-height: 220px;
  display: inline-block;
  margin: 4px;
  position: relative;
  .card-content {
    display: inline-block;
    // border: 1px solid pink;
    box-shadow: 1px 2px 3px #43a047;
    width: 100%;
    height: 100%;
    max-height: 145%;
    overflow: auto;
    outline: none;
    resize: none;
    padding-bottom: 30px;
  }
  &:hover{
    .operations{
        display: block;
        position: absolute;
        right: 0;
        bottom: 0;
        z-index: 2000;
        background: rgba(0, 0, 0, 0.5);
        border-radius: 5px;
    }
  }
  .operations{
    text-align: center;
    display: none;
    a{
      margin-left: 5px;
      margin-right: 5px;
      text-decoration: none;
      color: #fff;
    }
  }
}
</style>

