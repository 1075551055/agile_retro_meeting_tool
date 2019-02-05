<template>
  <b-container fluid>
    <!-- header -->
    <b-container class="header">
      <b-navbar toggleable="md" type="dark" variant="info">
        <b-navbar-toggle target="nav_collapse"></b-navbar-toggle>

        <b-navbar-brand href="#" class="d-lg-none d-md-none">Retro(Well)</b-navbar-brand>

        <b-collapse is-nav id="nav_collapse">
          <b-navbar-nav class="comment">
            <b-nav-item href="#">
              <i class="iconfont icon-biaoqing1"></i> Well
            </b-nav-item>
            <b-nav-item href="#">
              <i class="iconfont icon-biaoqing-nanguo"></i>Not Well
            </b-nav-item>
            <b-nav-item href="#">
              <i class="iconfont icon-jianyi"></i>Suggestions
            </b-nav-item>
          </b-navbar-nav>
        </b-collapse>
      </b-navbar>
    </b-container>
    <!-- content -->
    <b-container class="content">
      <b-row>
        <b-col class="summary-comment-col">
          <!-- <div class="bottom">
            <div class="fake-textarea" draggable="true">
              <a href class="iconfont icon-jiahao"></a>
              <div contenteditable="true" draggable="true" id="mytest"></div>
            </div>
          </div> -->
        </b-col>
        <b-col class="summary-comment-col">
          <!-- <div class="bottom">
            <div class="fake-textarea" draggable="true">
              <a href class="iconfont icon-jiahao"></a>
              <div contenteditable="true"></div>
            </div>
          </div> -->
        </b-col>
        <b-col class="summary-comment-col">
          <!-- <div class="bottom">
            <div class="fake-textarea" draggable="true">
              <a href class="iconfont icon-jiahao"></a>
              <div contenteditable="true"></div>
            </div>
          </div> -->
        </b-col>
      </b-row>
      <b-row>
        <b-col class="comment-col">
            <div class="fake-textarea" draggable="true">
              <a href class="iconfont icon-jiahao"></a>
              <!-- <div contenteditable="true" draggable="true" @input="changeData($event)"></div> -->
              <div contenteditable="true" draggable="true" :id="$uuid.v1()"></div>
            </div>
        </b-col>
        <b-col class="comment-col">
            <div class="fake-textarea" draggable="true">
              <a href class="iconfont icon-jiahao"></a>
              <!-- <div contenteditable="true" draggable="true" @input="changeData($event)"></div> -->
              <div contenteditable="true" draggable="true" :id="$uuid.v1()"></div>
            </div>
        </b-col>
        <b-col class="comment-col">
            <div class="fake-textarea" draggable="true">
              <a href class="iconfont icon-jiahao"></a>
              <!-- <div contenteditable="true" draggable="true" @input="changeData($event)"></div> -->
              <div contenteditable="true" draggable="true" :id="$uuid.v1()"></div>
            </div>
        </b-col>
      </b-row>
    </b-container>
  </b-container>
</template>

<script>
import { uuid } from 'vue-uuid';
export default {
  data: function() {
    return {
      msg: ""
    };
  },
  methods:{
    changeData: function(event){
      // this.msg = event.target.innerText;
    }
  },
  mounted: function() {
    let fakeTextAreas = document.querySelectorAll(".fake-textarea > div");
    [].forEach.call(fakeTextAreas, function(el){
      el.ondragstart = function(e){
        // drag start
        //console.log("dragstart");
        e.dataTransfer.setData("text/html", e.target.id);
        // console.log(e.target.id);
      }
      el.ondragend = function(e){
        // after mouseup will trigger dragend
        // console.log("dragend");
      }
      el.ondrag = function(e){
        // continue to trigger during drag
       
      }
      el.ondragleave = function(e){
        // will trigger dragleave when cursor leave the element
        // console.log("dragleave");
      }
    })

    let commentCols = document.querySelectorAll(".summary-comment-col");
    Array.prototype.forEach.call(commentCols, function(el) {
      el.ondragenter = function(e) {
        //console.log("ondragenter")
      }
      el.ondragover = function(e){
        // console.log("ondragover")
        e.preventDefault();
        
      }
      el.ondrop = function(e){
        //console.log('ondragdrop')
        let id = e.dataTransfer.getData("text/html");
        let originalCommentEle = document.getElementById(id);
        let newCommentEle = originalCommentEle.cloneNode(true);
        newCommentEle.id = uuid.v1();
        newCommentEle.style = "width: 45%; height: 120px; display: inline-block; overflow: auto; margin: 8px; background-color: #fff ; box-shadow: 3px 3px 6px #43a047";
        e.target.appendChild(newCommentEle);
      }
      el.ondragleave = function(e) {
        //console.log('ondragleave')
      }
    })
  }
};
</script>

<style lang="less" scoped>
.header {
  &.container {
    width: 100%;
    // override bootstrap "container" class max-width
    max-width: 100%;
    padding-left: 0;
    padding-right: 0;
    > nav {
      padding: 0;
    }
  }
  // well , not well, suggestions header
  .comment {
    &.navbar-nav {
      width: 100%;
    }
    .nav-item {
      width: 33.333333%;
      text-align: center;
    }
    @media screen and(max-width: 768px) {
      .nav-item {
        text-align: left;
        margin-left: 15px;
      }
    }
  }
  .bg-info {
    background-color: #43a047 !important;
  }
  .navbar-dark {
    .navbar-nav {
      .nav-link {
        color: #fff;
      }
    }
  }
}

.content {
  width: 100%;
  max-width: 100%;
  padding-left: 0;
  padding-right: 0;
  .row {
    margin-left: 0;
    margin-right: 0;
    border-bottom: 1px dashed #ccc;
    .summary-comment-col {
      border-right: 1px dashed #ccc;
      height: 490px;
      //remove gutter's padding:15px
      // padding-left: 0;
      // padding-right: 0;
      position: relative;
      overflow: auto;
      .bottom {
        position: absolute;
        bottom: 0;
        // css3 calc, gutter's padding is 15px
        // width: calc(100% - 15px);
        // width: -webkit-calc(100% - 15px);
        // width: -moz-calc(100% - 15px);
        // 100% is parent posistioned element content width + padding
        width: 100%;
        border-top: 1px dashed #ccc;
        border-right: 1px dashed #ccc;
        padding: 6px;
        margin-left: -15px;
        .fake-textarea {
          border: 1px solid #ccc;
          border-radius: 8px;
          box-shadow: 5px 5px 8px rgba(0, 0, 0, 0.5);
          // -webkit-user-modify: read-write-plaintext-only;
          // min-height: 60px;
          // max-height: 120px;
          // overflow: auto;
          // outline: none;
          position: relative;
          > div {
            display: inline-block;
            min-height: 60px;
            max-height: 120px;
            width: 100%;
            height: 100%;
            width: calc(100% - 45px);
            width: -webkit-calc(100% - 45px);
            width: -moz-calc(100% - 45px);
            margin-left: 45px;
            overflow: auto;
            outline: none;
            border: 1px solid red;
          }
          > a {
            display: inline;
            position: absolute;
            top: 50%;
            transform: translateY(-50%);
            padding-left: 8px;
            font-size: 30px;
            color: #aaa;
            text-decoration: none;
          }
        }
      }
    }
    .comment-col {
      border-right: 1px dashed #ccc;
      max-width: 33.3333333333333%;
      .fake-textarea {
          border: 1px solid #ccc;
          border-radius: 8px;
          box-shadow: 5px 5px 8px rgba(0, 0, 0, 0.6);
          margin-top: 15px;
          margin-bottom: 25px;
          position: relative;
          max-width: 100%;
          > div {
            display: inline-block;
            min-height: 60px;
            max-height: 120px;
            height: 100%;
            width: calc(100% - 45px);
            width: -webkit-calc(100% - 45px);
            width: -moz-calc(100% - 45px);
            max-width: calc(100% - 45px);
            margin-left: 45px;
            overflow: auto;
            outline: none;
            // border: 1px solid red;
          }
          > a {
            display: inline;
            position: absolute;
            top: 50%;
            transform: translateY(-50%);
            padding-left: 8px;
            font-size: 30px;
            color: #aaa;
            text-decoration: none;
          }
        }
    }
  }
}
</style>
