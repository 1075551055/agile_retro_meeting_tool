<template>
  <div class="card">
    <!-- <b-card-group deck class="mb-3">
      <b-card border-variant="success" header="Success" align="left">
        <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      </b-card>
    </b-card-group>-->
    <div class="card-content" contenteditable="true" draggable="true" :id="commentId">{{commentContent}}</div>
  </div>
</template>

<script>
export default {
  name: "CommentCard",
  data: function() {
    return {};
  },
  props:['commentId','commentContent']
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
  }
}
</style>

