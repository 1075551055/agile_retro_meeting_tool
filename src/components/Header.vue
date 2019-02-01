<template>
  <!--自适应容器  -->
  <b-container>
    <b-navbar toggleable="md" type="dark" variant="info">
      <b-navbar-toggle target="nav_collapse"></b-navbar-toggle>

      <b-navbar-brand href="#" class="d-lg-none d-md-none">Retro(Well)</b-navbar-brand>

      <b-collapse is-nav id="nav_collapse">
        <b-navbar-nav class="comment">
          <b-nav-item href="#">Well</b-nav-item>
          <b-nav-item href="#">Not Well</b-nav-item>
          <b-nav-item href="#">Suggestions</b-nav-item>
        </b-navbar-nav>

        <!-- Right aligned nav items -->
        <b-navbar-nav class="ml-auto">
          <b-nav-item-dropdown right>
            <!-- Using button-content slot -->
            <template slot="button-content">
              <em>User</em>
            </template>
          </b-nav-item-dropdown>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </b-container>
</template>

<script>
export default {};
</script>

// https://stackoverflow.com/questions/50763152/rendering-custom-styles-in-bootstrap-vue
// https://vue-loader-v14.vuejs.org/zh-cn/features/scoped-css.html
// https://github.com/bootstrap-vue/bootstrap-vue/issues/690
// https://inside.com/

<style lang="less" scoped>
.container {
  width: 100%;
  // override bootstrap "container" class max-width
  max-width: 100%;
}

.comment{
  &.navbar-nav{
    width: 96%;
  }
  .nav-item{
    width: 32%;
    text-align: center;
  }
}

.bg-info{
  background-color: #43A047 !important;
}

.navbar-dark{
  .navbar-nav{
    .nav-link{
      color: #fff;
    }
  }
} 
</style>

