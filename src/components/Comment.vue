<template>
  <!-- <v-touch v-on:swipeleft="onSwipeLeft" v-on:swiperight="onSwipeRight"  tag="div"> -->
  <b-container class="comment">
    <!-- header -->
    <b-container class="header">
      <b-row>
        <b-col v-show="showWell">
          <i class="iconfont icon-biaoqing1"></i> Well
          <a href="#" class="large" @click.prevent="enlargeCommentColArea('well')" v-show="showWell && !isLarge">
             <i class="iconfont icon-fangda"></i>
          </a>
          <a href="#" class="small" @click.prevent="diminishCommentColArea" v-show="showWell && isLarge">
             <i class="iconfont icon-icon--"></i>
          </a>
        </b-col>
        <b-col v-show="showNotWell">
          <i class="iconfont icon-biaoqing-nanguo"></i>Not Well
          <a href="#" class="large" @click.prevent="enlargeCommentColArea('notWell')" v-show="showNotWell && !isLarge">
             <i class="iconfont icon-fangda"></i>
          </a>
           <a href="#" class="small" @click.prevent="diminishCommentColArea" v-show="showNotWell && isLarge">
             <i class="iconfont icon-icon--"></i>
          </a>
        </b-col>
        <b-col v-show="showSuggestions">
          <i class="iconfont icon-jianyi"></i>Suggestions
          <a href="#" class="large" @click.prevent="enlargeCommentColArea('suggestions')" v-show="showSuggestions && !isLarge">
             <i class="iconfont icon-fangda"></i>
          </a>
           <a href="#" class="small" @click.prevent="diminishCommentColArea" v-show="showSuggestions && isLarge">
             <i class="iconfont icon-icon--"></i>
          </a>
        </b-col>
      </b-row>
    </b-container>
    <!-- content -->
    <b-container class="content">
      <!-- <b-row v-intro-autostart="autostart"
            v-intro-autostart.config="autostartConfig" v-intro="'you can drag cards in these area(您可以拖拽这里区域生成的任何卡片)'"> -->
      <b-row>  
        <b-col class="summary-comment-col" :data-commenttype="commentType.well" v-show="showWell">
          <!-- bind commentId and commentContent, then tranfer to child component:CommentCard -->
          <transition-group name="fadeUp">
            <CommentCard
                v-show="wellComments.length != 0"
                v-for="(item) in wellComments"
                :key="item.commentId"
                v-bind:commentId="item.commentId"
                v-bind:commentContent="item.content"
                v-bind:commentType="commentType.well"
            ></CommentCard>
          </transition-group>
         
        </b-col>
        <b-col class="summary-comment-col" :data-commenttype="commentType.notWell" v-show="showNotWell">
            <transition-group name="fadeUp">
                <CommentCard
                    v-show="notWellComments.length != 0"
                    v-for="(item) in notWellComments"
                    :key="item.commentId"
                    v-bind:commentId="item.commentId"
                    v-bind:commentContent="item.content"
                    v-bind:commentType="commentType.notWell"
                ></CommentCard>
            </transition-group>
        </b-col>
        <b-col class="summary-comment-col" :data-commenttype="commentType.suggestion" v-show="showSuggestions">
            <transition-group name="fadeUp">
                <CommentCard
                    v-show="suggestionComments.length != 0"
                    v-for="(item) in suggestionComments"
                    :key="item.commentId"
                    v-bind:commentId="item.commentId"
                    v-bind:commentContent="item.content"
                    v-bind:commentType="commentType.suggestion"
                ></CommentCard>
            </transition-group>
        </b-col>
      </b-row>
      <!-- <b-row  v-intro-autostart="autostart"
            v-intro-autostart.config="autostartConfig" v-intro="'you can drag these textareas(您可以拖拽这里的文本框到上面的well,not well,suggestion的任何区域)'" v-intro-step="1" v-intro-position="'top'"> -->
      <b-row> 
        <b-col class="comment-col" v-show="showWell">
          <div class="fake-textarea" draggable="true">
            <b-form-textarea
              draggable="true"
              v-model="comment.wellComment"
              placeholder="Enter something"
              :rows="2"
              :max-rows="6"
              :data-commenttype="commentType.well"
              :data-dragged-area-type="draggedAreaType.fromInput"
            ></b-form-textarea>
            <a href class="iconfont icon-jiahao" @click.prevent="addComment('well')"></a>
          </div>
        </b-col>
        <b-col class="comment-col" v-show="showNotWell">
          <div class="fake-textarea" draggable="true">
            <b-form-textarea
              draggable="true"
              v-model="comment.notWellComment"
              placeholder="Enter something"
              :rows="2"
              :max-rows="6"
              :data-commenttype="commentType.notWell"
              :data-dragged-area-type="draggedAreaType.fromInput"
            ></b-form-textarea>
            <a href class="iconfont icon-jiahao" @click.prevent="addComment('notWell')"></a>
          </div>
        </b-col>
        <b-col class="comment-col" v-show="showSuggestions">
          <div class="fake-textarea" draggable="true">
            <b-form-textarea
              draggable="true"
              v-model="comment.suggestionComment"
              placeholder="Enter something"
              :rows="2"
              :max-rows="6"
              :data-commenttype="commentType.suggestion"
              :data-dragged-area-type="draggedAreaType.fromInput"
            ></b-form-textarea>
            <a href class="iconfont icon-jiahao" @click.prevent="addComment('suggestion')"></a>
          </div>
        </b-col>
      </b-row>
    </b-container>
  </b-container>
  <!-- </v-touch> -->
</template>

<script>
import { uuid } from "vue-uuid";
import CommentCard from "./CommentCard";
import constants from "@/constants";
import 'intro.js/introjs.css';
export default {
  data: function() {
    return {
      comment: constants.comment,
      commentType: constants.commentType,
      draggedAreaType: constants.draggedAreaType,
      commentMaxLength: 500,
      showWell: true,
      showNotWell: true,
      showSuggestions: true,
      isLarge: false
      // intro.js config
      // autostart: true,
      // autostartConfig: {
      //   nextLabel: '[next -->]'
      // }
      // end intro.js config
    };
  },
  sockets: {
      //if visit this component by router, mounted is triggered before sockets ,it cannot trigger socket 
      // connect event, so need to trigger in mounted event again.
      connect: function () {
          console.log('socket connected');
          this.$socket.emit('meetingConnect', this.$route.params.meetingId);
      }
  },
  components: {
    CommentCard
  },
  computed: {
    wellComments: function() {
      return this.$store.state.comment.allComments.filter(
        item => item.commentType === constants.commentType.well
      );
    },
    notWellComments: function() {
      return this.$store.state.comment.allComments.filter(
        item => item.commentType === constants.commentType.notWell
      );
    },
    suggestionComments: function() {
      return this.$store.state.comment.allComments.filter(
        item => item.commentType === constants.commentType.suggestion
      );
    }
  },
  watch:{
    'comment.wellComment':function(newValue ,oldValue){
       if(newValue.length > this.commentMaxLength){
         this.comment.wellComment = newValue.substring(0, this.commentMaxLength);
       }
    },
    'comment.notWellComment':function(newValue ,oldValue){
       if(newValue.length > this.commentMaxLength){
         this.comment.notWellComment = newValue.substring(0, this.commentMaxLength);
       }
    },
    'comment.suggestionComment':function(newValue ,oldValue){
       if(newValue.length > this.commentMaxLength){
         this.comment.suggestionComment = newValue.substring(0, this.commentMaxLength);
       }
    }
  },
  created: function(){
      this.$store.dispatch('comment/getAllComments',{meetingId: this.$route.params.meetingId})
  },
  mounted: function() {
    // trigger socket connect event
    this.$socket.emit('connect');
    this.setDragDrop();
  },

  methods: {
    addComment: function(commentTextareaType, droppedAreaType = null) {
      var payload = { commentType: commentTextareaType, meetingId: this.$route.params.meetingId };
      if(droppedAreaType != null) {
          payload.commentType = droppedAreaType;
      }
      if (commentTextareaType === this.commentType.well) {
        payload.commentContent = this.comment.wellComment;
        //clear data
        this.comment.wellComment = "";
      }
      if (commentTextareaType === this.commentType.notWell) {
        payload.commentContent = this.comment.notWellComment;
        //clear data
        this.comment.notWellComment = "";
      }
      if (commentTextareaType === this.commentType.suggestion) {
        payload.commentContent = this.comment.suggestionComment;
        //clear data
        this.comment.suggestionComment = "";
      }
      this.$store.dispatch("comment/addComment", payload);
    },
    enlargeCommentColArea: function(areaType){
      if(areaType === 'well'){
        this.showNotWell = this.showSuggestions = false;
      }
      if(areaType === 'notWell'){
        this.showWell = this.showSuggestions = false;
      }
      if(areaType === 'suggestions'){
        this.showWell = this.showNotWell = false;
      }
      this.isLarge = true;
    },
    diminishCommentColArea: function(){
      this.showWell = this.showNotWell = this.showSuggestions = true;
      this.isLarge = false;
    },
    onSwipeLeft: function(e) {
      // alert("left");
      console.log(e);
    },
    onSwipeRight: function(e) {
      // alert("right")
      console.log(e);
    },
    setDragDrop: function() {
        // $el 获取根元素
      var fakeTextAreas = this.$el.querySelectorAll(
        ".fake-textarea > textarea"
      );
      [].forEach.call(fakeTextAreas, el => {
        var self = this;
        el.ondragstart = function(e) {
          // drag start
          e.dataTransfer.setData(
            "text/html",
            JSON.stringify({
              commentType: e.target.dataset.commenttype,
              draggedAreaType: e.target.dataset.draggedAreaType
            })
          );
        };
        el.ondragend = function(e) {
          // after mouseup will trigger dragend
        };
        el.ondrag = function(e) {
          // continue to trigger during drag
        };
        el.ondragleave = function(e) {
          // will trigger dragleave when cursor leave the element
        };
      });

      var commentCols = this.$el.querySelectorAll(".summary-comment-col");
      Array.prototype.forEach.call(commentCols, el => {
        var self = this;
        el.ondragenter = function(e) {};
        el.ondragover = function(e) {
          // prevent browser default behaviour or it cannot trigger ondrop event
          e.preventDefault();
        };
        el.ondrop = function(e) {
          var dragDroppedCommentJson = JSON.parse(
            e.dataTransfer.getData("text/html")
          );
          var commentTextareaType = dragDroppedCommentJson.commentType;
          var draggedAreaType = dragDroppedCommentJson.draggedAreaType;
          var commentId = dragDroppedCommentJson.commentId;
          var droppedAreaType = e.target.dataset.commenttype;
          var payload = { commentType: droppedAreaType };
          if (draggedAreaType === self.draggedAreaType.fromInput) {
            self.addComment(commentTextareaType, droppedAreaType);
          } else if (draggedAreaType === self.draggedAreaType.fromCard) {
            var commentObj = self.$store.state.comment.allComments.filter(
              item => item.commentId === commentId
            )[0];
            if (droppedAreaType !== commentObj.commentType) {
              self.$store.dispatch("comment/changeCommentType", {
                meetingId: self.$route.params.meetingId,
                commentId,
                toCommentType: droppedAreaType
              });
            }
          }
        };

        el.ondragleave = function(e) {
          //console.log('ondragleave')
        };
      });
    }
 
 }
};
</script>

<style lang="less" scoped>
.comment {
  &.container {
    width: 100%;
    padding: 0;
    flex: 1;
    display: flex;
    flex-direction: column;
    // @media screen and (max-width: 300%) {
      overflow: hidden;
    // }

    .header {
      &.container {
        // width: 100%;
        // override bootstrap "container" class max-width. 300 is for mobile
        max-width: 300%;
        padding-left: 0;
        padding-right: 0;
        @media screen and (max-width: 768px) {
          width: 300%;
        }
        > nav {
          padding: 0;
        }
        .row {
          margin-left: 0;
          margin-right: 0;
          .col {
            text-align: center;
            border-right: 1px dashed #ccc;
            @media screen and (max-width: 768px) {
              border-right: none;
            }
            padding: 10px 0 10px;
            position: relative;
            a.large {
              text-decoration: none;
              position: absolute;
              right: 2px;
              top: 0;
              .icon-fangda {
                font-size: 32px;
              }
            }
            a.small {
              text-decoration: none;
              position: absolute;
              right: 2px;
              top: 0;
             .icon-icon--{
               font-size: 32px;
             }
            }
          }
        }
      }
    }

    .content {
      &.container {
        // width: 100%;
        // override bootstrap "container" class max-width. 300 is for mobile
        max-width: 300%;
        padding-left: 0;
        padding-right: 0;
        flex: 1;
        display: flex;
        flex-direction: column;
        @media screen and (max-width: 768px) {
          width: 300%;
        }
      }
      .row:first-child{
          flex: 1;
      }
      .row {
        margin-left: 0;
        margin-right: 0;
        border-bottom: 1px dashed #ccc;
        .summary-comment-col {
          border-right: 1px dashed #ccc;
          @media screen and (max-width: 768px) {
            border-right: none;
          }
          position: relative;
          overflow: auto;
        }
        .comment-col {
          border-right: 1px dashed #ccc;
          @media screen and (max-width: 768px) {
            border-right: none;
          }
          // max-width: 33.3333333333333%;
          .fake-textarea {
            border: 1px solid #ccc;
            border-radius: 8px;
            box-shadow: 5px 5px 8px rgba(0, 0, 0, 0.6);
            margin-top: 15px;
            margin-bottom: 25px;
            // position: relative;
            max-width: 100%;
            // content vertical center & horizontal Center
            display: -webkit-flex;
            display: flex;
            -webkit-align-items: center;
            align-items: center;
            -webkit-justify-content: center;
            justify-content: center;
            > textarea {
              outline: none;
              border-radius: 5px;
              resize: none;
              border: 0;
              &.form-control:focus{
                -webkit-box-shadow: none;
                box-shadow:none;
              }
            }
            > a {
              display: inline;
              padding-left: 6px;
              padding-right: 6px;
              font-size: 30px;
              color: #aaa;
              text-decoration: none;
            }
          }
        }
      }
    }
  }
}
</style>
