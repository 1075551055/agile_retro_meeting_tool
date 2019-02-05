<template>
  <b-container fluid>
    <!-- <b-card no-body>
      <b-tabs pills card>
        <b-tab title="Comment" active>
          <router-view name="comment"></router-view>
        </b-tab>
        <b-tab title="Action">
          <router-view name="action"></router-view>
        </b-tab>
      </b-tabs>
    </b-card>-->
    <b-tabs>
      <b-tab title="Comment" active>
        <router-view name="comment"></router-view>
      </b-tab>
      <b-tab title="Action">
        <router-view name="action"></router-view>
      </b-tab>
    </b-tabs>
  </b-container>
</template>

<script>
export default {};
</script>

<style lang="less" scoped>
.container-fluid {
  padding-left: 0;
  padding-right: 0;
}
</style>

<style lang="less">
.nav-tabs{
  // background-color: #43a047;
  // a{
  //   font-size: 14px;
  //   font-family: 'Open Sans', sans-serif;
  //   font-weight: 400;
  // }
}
</style>

