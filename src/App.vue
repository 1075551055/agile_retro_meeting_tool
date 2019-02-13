<template>
  <div id="app">
    <!-- <img src="./assets/logo.png"> -->
    <!-- <router-view/> -->

    <!-- <Main></Main> -->
    <router-view></router-view>
   
    <!-- naming router layout -->
    <!-- <router-view name="headernav"></router-view>
    <router-view name="comment"></router-view> -->

    <!-- HeaderTab layout config -->
    <!-- <router-view></router-view> -->
  </div>
</template>

<script>
import Main from '@/components/Main'

export default {
  // https://cn.vuejs.org/v2/api/#name
  name: 'App',
  data(){
    return{
    }
  },
  components:{
    Main
  }
}
</script>

<style>
html{
  font-size: 16px;
}
#app {
  font-family: "Roboto", "Helvetica Neue", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  background-color: #f5f5f5;
  font-size: 16px;
  height: 100%;
}

.active-route{
  border-bottom: 1px solid red;
}

/* will override children's component .container class style */
.container {
  width: 100%;
  /* override bootstrap "container" class max-width */
  max-width: 100%;
}
</style>
