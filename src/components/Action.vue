<template>
  <b-container>
    <b-row>
      <b-col cols="1"></b-col>
      <b-col cols="9">
        <b-input-group class="mb-3" size="lg" prepend>
          <b-form-input v-model="actionContent" placeholder="Enter something"/>
          <b-input-group-append>
            <b-btn size="lg" text="Button" variant="success" @click="addAction">add</b-btn>
          </b-input-group-append>
        </b-input-group>
      </b-col>
      <b-modal
        v-model="deleteModalShow"
        @ok="handleOkForDeleteAction"
      >Are you sure to delete this item ?</b-modal>
    </b-row>
    <b-row>
      <b-col cols="1"></b-col>
      <b-col cols="9">
        <p class="delete-tips">Tips: double click to delete item.</p>
        <div class="copy-all">
          <b-link
            href="#"
            @click.prevent
            v-clipboard:copy="allActionContent"
            v-clipboard:success="onCopy"
            v-clipboard:error="onError"
          >Copy All</b-link>
          <vue-toast ref="toast"></vue-toast>
        </div>

        <transition-group appear tag="ul">
          <li
            v-for="(item, index) in allActions"
            :key="item.actionId"
            @dblclick="deleteAction(index, item.actionId)"
          >
            {{item.actionContent}}
            <span class="operations">
              <b-link href="#" @click.prevent="deleteAction(index, item.actionId)">Delete</b-link>
              <b-link
                href="#"
                @click.prevent
                v-clipboard:copy="item.actionContent"
                v-clipboard:success="onCopy"
                v-clipboard:error="onError"
              >Copy</b-link>
            </span>
          </li>
        </transition-group>
      </b-col>
      <b-col cols="3"></b-col>
    </b-row>
  </b-container>
</template>

<script>
import "vue-toast/dist/vue-toast.min.css";
import VueToast from "vue-toast";
export default {
  data: function() {
    return {
      actionContent: "",
      deleteModalShow: false,
      deletedActionIndex: "",
      deletedActionId: ""
    };
  },
  components: {
    VueToast
  },
  computed: {
    allActions: function() {
      return this.$store.state.action.allActions;
    },
    allActionContent: function() {
      var result = "";
      this.$store.state.action.allActions.forEach(element => {
        result += element.actionContent + "\r\n";
      });
      return result;
    }
  },
  created() {
    this.$store.dispatch("action/getAllActions", {
      meetingId: this.$route.params.meetingId
    });
  },
  methods: {
    addAction: function() {
      this.$store.dispatch("action/addAction", {
        actionContent: this.actionContent,
        meetingId: this.$route.params.meetingId
      });
      this.actionContent = "";
    },
    deleteAction: function(index, acitonId) {
      this.deleteModalShow = true;
      this.deletedActionIndex = index;
      this.deletedActionId = acitonId;
    },
    handleOkForDeleteAction: function(evt) {
      this.$store.dispatch("action/deleteAction", {
        index: this.deletedActionIndex,
        actionId: this.deletedActionId
      });
    },
    onCopy: function(e) {
      // alert('You just copied: ' + e.text)
      const toast = this.$refs.toast;
      toast.setOptions({
        position: "top center"
      });
      toast.showToast("Copy successfully", {
        theme: "success",
        timeLife: 1000
      });
    },
    onError: function(e) {
      alert("Failed to copy texts");
    }
  }
};
</script>

<style lang="less" scoped>
.container {
  padding: 15px;
  textarea {
    resize: none;
    height: 100%;
  }
  .delete-tips {
    margin-top: 5px;
    color: red;
  }
  .copy-all {
    a {
      margin-right: 5px;
      float: right;
    }
    &::after {
      content: "";
      display: block;
      height: 0;
      visibility: hidden;
      clear: both;
    }
  }
  ul {
    padding: 0;
    li {
      list-style: none;
      border: 1px dashed #999;
      color: #000;
      margin: 5px 0;
      line-height: 35px;
      padding-left: 5px;
      font-size: 16px;
      font-weight: 600;
      width: 100%;
      word-break: break-all;
      // word-wrap: break-word;
      position: relative;
      .operations {
        position: absolute;
        right: 5px;
      }
    }

    li:hover {
      background-color: #87ceeb;
      transition: all 0.8s ease;
      cursor: pointer;
    }
  }
}

// transition
.v-leave-to {
  opacity: 0;
  transform: translateY(80px);
}

.v-leave-active {
  transition: all 0.6 ease;
  position: absolute;
}

.v-move {
  transition: all 0.6s ease;
}
</style>
