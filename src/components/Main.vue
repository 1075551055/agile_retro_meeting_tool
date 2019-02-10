<template>
  <b-container fluid>
      <HeaderNav></HeaderNav>
      <router-view></router-view>
  </b-container>
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
.container {
  width: 100%;
  // override bootstrap "container" class max-width
  max-width: 100%;
}

</style>
