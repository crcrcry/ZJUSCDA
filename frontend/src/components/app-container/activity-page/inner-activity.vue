<template>
  <div id="container">
    <div :style="{ position:'absolute', width: img.width, height: img.height, top: img.top, left: img.left }">
      <el-carousel :interval="5000" arrow="always" indicatorPosition="none" height="100%">
        <el-carousel-item v-for="(item, index) in cards" :key="item.title+index">
          <div class="card" :style="{background: `url(${item.image})`, backgroundSize: '100% 100%'}">
            <div class="title">
              {{item.title}}
            </div>
          </div>
        </el-carousel-item>
      </el-carousel>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'inner-activity',
    data () {
      return {
        width: 0,
        height: 0,
      }
    },
    computed: {
      cards() {
        return this.$store.state.activity.innerActivity;
      },
      img() {
        const width = this.width
        const height = this.height
        const img = { width: 0, height: 0, left: 0, top: 0 }
        // 16: 9 图片调整
        if (width * 9 / 16 > height) {
          img.height = height;
          img.width = height * 16 / 9;
          img.left = (width - img.width) / 2;
        } else {
          img.width = width;
          img.height = width * 9 / 16;
          img.top = (height - img.height) / 2;
        }
        return img;
      }
    },
    mounted () {
      this.changeSize();
      window.addEventListener('resize', this.changeSize);
    },
    methods: {
      changeSize () {
        this.width = this.$el.clientWidth;
        this.height = this.$el.clientHeight;
      }
    }
  }
</script>

<style scoped>
  #container{
    position: absolute;
    left: 5%;
    top: 10%;
    width: 85%;
    height: 80%
  }

  .el-carousel{
    position: absolute;
    width: 100%;
    height: 100%;
  }

  .card{
    margin: 0;
    width: 100%;
    height: 100%;
  }

  .title{
    position: absolute;
    top: calc(100% - 80px);
    left: 0;
    padding-right: 20%;
    width: 80%;
    height: 80px;
    background: rgba(216,216,216,0.76);

    color: #26465C;
    font: 300 40px/80px "PingFang SC";
    text-align: right;
  }
</style>
