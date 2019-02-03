<template>
  <b-container fluid>
    <!-- header -->
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
    <!-- content -->
    <b-container class="content">
      <b-row>
        <b-col>1 of 3</b-col>
        <b-col>2 of 3</b-col>
        <b-col>3 of 3</b-col>
    </b-row>
    </b-container>
  </b-container>
</template>

<script>
export default {};
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
  // well , not well, suggestions header
  .comment {
    &.navbar-nav {
      width: 100%;
      li {
        // border: 1px solid red;
      }
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

.content{
  width: 100%;
  max-width: 100%;
  padding-left: 0;
  padding-right: 0;
  .row {
    margin-left: 0;
    margin-right: 0;
    .col{
      border-right: 1px dashed #ccc;
      height: 200px;
    }
  }
}

</style>
