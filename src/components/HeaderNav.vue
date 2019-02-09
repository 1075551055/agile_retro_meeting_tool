<template>
     <!-- header -->
    <b-container fluid class="header">
      <b-navbar toggleable="md" type="dark" variant="info">
        <b-navbar-toggle target="nav_collapse"></b-navbar-toggle>

        <b-navbar-brand href="#" class="d-lg-none d-md-none">Retro</b-navbar-brand>

        <b-collapse is-nav id="nav_collapse">
          <b-navbar-nav class="comment">
            <!-- <b-nav-item href="#/comment">
               Comment
            </b-nav-item> -->
            <router-link class="nav-link" to='comment'>Comment</router-link>
            <!-- <b-nav-item href="#/action">
              Action
            </b-nav-item> -->
            <router-link class="nav-link" to='action'>Action</router-link>
          </b-navbar-nav>
        </b-collapse>
      </b-navbar>
    </b-container>
</template>

<script>
export default {
    
}
</script>

<style lang="less" scoped>
.header {
  &.container {
    width: 100%;
    // override bootstrap "container" class max-width
    max-width: 100%;
    padding-left: 0;
    padding-right: 0;
    > nav {
      padding: 0;
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
