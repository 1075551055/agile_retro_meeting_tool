<template>
  <!--自适应容器  -->
  <b-container>
    <b-navbar toggleable="md" type="dark" variant="info">
      <b-navbar-toggle target="nav_collapse"></b-navbar-toggle>

      <b-navbar-brand href="#" class="d-lg-none d-md-none">Retro</b-navbar-brand>

      <b-collapse is-nav id="nav_collapse">
        <b-navbar-nav>
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

<style lang="less" scoped>
    // .navbar-nav{
    //     width: 80%;
    // }
    // .nav-item {
    //     width: 30%;
    // }
</style>

