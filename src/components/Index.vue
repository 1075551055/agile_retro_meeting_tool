<template>
  <div>
    <b-container>
      <b-row>
        <div class="retro-des">
          <div id="logo" class="logo">
            <h1>
              <a href="#">
                <img src="../assets/logo.png" alt="">
              </a>
            </h1>
          </div>
          
          <div class="are-you-ready">
             <transition @before-enter="areYouReadyBeforeEnter" @enter="areYouReadyEnter" @after-enter="areYouReadyAfterEnter">
               <!-- <img src="../assets/are_you_ready.png" alt="" v-show="areYouReadyActive">  -->
               <div v-show="areYouReadyActive"></div>
             </transition>
          </div>
          <br>
          <b-button variant="secondary btn-lg" @click="createMeeting">start a meeting</b-button>
          
          <loading :show="isLoading" :label="loadingLabel"></loading>
          <modal name="security-verify" :adaptive="true">
            <div class="security-content">
              <p>Please swipe to complete validation</p>
              <Verify :barSize="{width:'95%',height:'40px'}" @success="verifySuccess('success')" @error="verifyError('error')" :type="3" :showButton="false"></Verify>
            </div>
          </modal>
        </div>
      </b-row>
      <div class="contact-us">
          <b-row>
            <i>contact us:13824774439@163.com</i>
          </b-row>
          <b-row>
            <a href="https://github.com/1075551055/agile_retro_meeting_tool">github: agile_retro_meeting_tool</a>
          </b-row>
      </div>
    </b-container>
  </div>
</template>

<script>
import loading from "vue-full-loading";
import { uuid } from "vue-uuid";
import Verify from 'vue2-verify';
export default {
  data: function() {
    return {
      isLoading: false,
      loadingLabel: "loading...",
      areYouReadyActive: false
    };
  },
  components: {
    loading,
    Verify
  },
  methods: {
    verifySuccess: function(text) {
        console.log(text);
        this.isLoading = true;
        // ajax create meeting
        var _this = this;
        setTimeout(() => {
            this.axios.post('/meeting',{meetingName: 'agile retro meeting'})
                  .then(function(response){
                      var status = response.data.status;
                      if(status == 0){
                          _this.isLoading = false;
                          var meetingId = response.data.meetingId;
                          _this.$router.push({ path: `main/comment/${meetingId}` });
                      }
                  })
                  .catch(function(error){
                      console.log(error)
                  })
        }, 1000);
    },
    verifyError: function(text) {
        console.log(text);
    },
    createMeeting: function() {
      this.$modal.show('security-verify');
    },
    areYouReadyBeforeEnter: function(el){
      // el.style.transform = "translate(0,0)"
      el.style.width = "0%";
    },
    areYouReadyEnter: function(el, done){
      el.offsetWidth;
      // el.style.transform = "translate(100px, 300px)";
      el.style.width = "100%";
      el.style.transition = "width 1s .5s steps(5)";
      done();
    },
    areYouReadyAfterEnter: function(el){
      // this.areYouReadyActive = false;
    }
  },
  mounted: function(){
    this.areYouReadyActive = true;
  }
};
</script>

<style lang="less" scoped>
// container
.container {
  min-height: 100vh;
  background-color: #2AB561;
  // background-size: 100% 100% ;
  font-family: "kreon","Roboto", "Helvetica Neue", Helvetica, Arial, sans-serif;;
  font-weight: 300;
  color: #333;
  .row:first-child {
    display: flex;
    align-items: center;
    justify-content: center;
    div.retro-des {
      .logo{
        text-align: center;
        img{
          vertical-align: middle;
        }
      }
      .are-you-ready{
        width: 336px;
        // img{
        //   vertical-align: middle;
        //   width: 100%;
          // width: 0%;
          // &.active{
          //   width: 100%;
          //   transition: width 2s steps(5);
          //   -webkit-transition: width 2s steps(5);
          // }
        // }
        > div{
          background-image: url("../assets/are_you_ready.png");
          width: 336px;
          height: 70px;
        }
      }
      button {
        color: #fff;
        background-color: #004f5c;
        display: block;
        margin: 0 auto;
        padding: 17px 75px;
        font-size: 25px;
      }
      button:hover {
        border: 2px solid #43a047;
        background-color: #1b2b1b;
      }
    }
  }
  div.contact-us{
    position: fixed;
    right: 30px;
    bottom: 20px;
    i{
      color: #fff;
    }
    a{
      text-decoration: underline; 
      color: #fff;
    }
  }
}

// security validation
.security-content {
  width: 96%;
  margin: 0 auto;
  p{
    margin-top: 20px;
    padding-bottom: 20px;
    border-bottom: 1px solid #ccc;
  }
  div{
    margin-top: 50px;
  }
}
</style>


