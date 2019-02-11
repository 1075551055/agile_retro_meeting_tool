<template>
  <div id="app">
    <!-- <img src="./assets/logo.png"> -->
    <!-- <router-view/> -->

    <Main></Main>

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
  components:{
    Main
  }
}
</script>

<style>
#app {
  font-family: "Roboto", "Helvetica Neue", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /* text-align: center; */
  /* color: #2c3e50; */
  /* margin-top: 60px; */
  /* background-color: #F8F4F3; */
  background-color: #f5f5f5;
  font-size: 16px;
  height: 100%;
}

.active-route{
  border-bottom: 1px solid red;
}
</style>
