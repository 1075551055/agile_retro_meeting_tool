<template>
  <div class="card">
    <!-- <b-card-group deck class="mb-3">
      <b-card border-variant="success" header="Success" align="left">
        <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      </b-card>
    </b-card-group>-->
    <!-- <div class="card-content" contenteditable="true" draggable="true"  v-on:dragstart="dragStart($event)" :id="commentId">{{commentContent}}</div> -->
    <b-form-textarea
      class="card-content"
      draggable="true"
      :id="commentId"
      :ref="commentId"
      v-model="commentContent"
      :data-commenttype="commentType"
      :rows="2"
      :max-rows="6"
    ></b-form-textarea>
  </div>
</template>

<script>
import constants from "@/constants";
export default {
  name: "CommentCard",
  data: function() {
    return {};
  },
  props: ["commentId", "commentContent", "commentType"],
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
    }
  },
  mounted() {
    this.setDragStart();
  }
};
</script>

<style lang="less" scoped>
.card {
  width: 45%;
  height: 25%;
  max-height: 45%;
  display: inline-block;
  margin: 4px;
  .card-content {
    display: inline-block;
    border: 1px solid pink;
    box-shadow: 3px 3px 3px #43a047;
    width: 100%;
    height: 100%;
    max-height: 145%;
    overflow: auto;
    outline: none;
    resize: none;
  }
}
</style>

