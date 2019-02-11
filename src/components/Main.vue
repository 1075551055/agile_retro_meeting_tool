<template>
  <!-- <b-container fluid> -->
    <div class="main">
      <HeaderNav></HeaderNav>
      <router-view></router-view>
    </div>
  <!-- </b-container> -->
</template>

<script>
import HeaderNav from './HeaderNav';
export default {
    components:{
      HeaderNav
    }
};
</script>

<style lang="less" scoped>
.main{
    display: flex;
    flex-direction: column;
    min-height: 100vh;
}
// will override children's component .container class style
.container {
  width: 100%;
  // override bootstrap "container" class max-width
  max-width: 100%;
}

</style>
