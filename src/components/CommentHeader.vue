<template>
  <!--自适应容器  -->
  <b-container class="header">
    <b-navbar toggleable="md" type="dark" variant="info">
      <b-navbar-toggle target="nav_collapse"></b-navbar-toggle>

      <b-navbar-brand href="#" class="d-lg-none d-md-none">Retro(Well)</b-navbar-brand>

      <b-collapse is-nav id="nav_collapse">
        <b-navbar-nav class="comment">
          <b-nav-item href="#">Well</b-nav-item>
          <b-nav-item href="#">Not Well</b-nav-item>
          <b-nav-item href="#">Suggestions</b-nav-item>
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
.header {
  &.container {
    width: 100%;
    // override bootstrap "container" class max-width
    max-width: 100%;
    padding-left: 0;
    padding-right: 0;
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
</style>

