<template>
  <div id="container">
    <el-carousel :interval="5000" arrow="always" indicatorPosition="none" height="57vh">
      <el-carousel-item v-for="(item, index) in cards" :key="item.title">
        <div class="card" :style="{background: `url(${item.image})`, backgroundSize: '100% 100%'}">
          <div class="title">
            {{item.title}}
          </div>
        </div>
      </el-carousel-item>
    </el-carousel>
  </div>
</template>

<script>
  export default {
    name: 'inner-activity',
    computed: {
      cards() {
        return this.$store.state.activity.innerActivity;
      },
    }
  }
</script>

<style scoped>
  #container{
    margin-top: 2.4vw;
    margin-left: 1vw;
    width: 64vw;
    height: 57vh;
  }

  .card{
    margin: 0;
    width: 100%;
    height: 100%;
  }

  .title{
    float: left;
    margin-top: calc(57vh - 80px);
    padding: 0 15%;
    width: 70%;
    height: 80px;
    background: rgba(216,216,216,0.76);

    color: #26465C;
    font: 300 40px/80px "PingFang SC";
    text-align: right;
  }
</style>
