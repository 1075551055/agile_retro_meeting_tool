<template>
  <div>
    <b-container>
      <b-row>
        <div class="retro-des">
          <h1>Agile Retrospective Meeting</h1>
          <br>
          <b-button variant="secondary btn-lg">start a meeting</b-button>
        </div>
      </b-row>
      <b-row>
        <div class="retro-bottom">
          <img src="../assets/retro_index_bottom.png" alt>
        </div>
      </b-row>
    </b-container>
  </div>
</template>

<script>
export default {};
</script>

<style lang="less" scoped>
.container {
  min-height: 100vh;
  background-color: #32a7b8;
  .row {
    height: 50vh;
  }
  .row:first-child {
    display: flex;
    align-items: center;
    justify-content: center;
    div.retro-des {
      h1 {
        font-size: 50px;
        color: #fff;
        // margin: 0 auto;
      }
      button {
        color: #fff;
        background-color: #004f5c;
        display: block;
        margin: 0 auto;
        padding: 17px 75px;
        font-size: 25px;
      }
      button:hover {
        border: 2px solid #43a047;
        background-color: #1b2b1b;
      }
    }
  }
  .retro-bottom {
    width: 100%;
    height: 100%;
    img {
      width: 100%;
    }
  }
}
</style>
