<template>
  <div id="container">
    <el-row :gutter="10">
      <el-col :span="12" id="title">
        <el-row>
          <div>
            <el-row id="name">校园招聘中心</el-row>
            <el-row id="ename">Campus Recruitment Center</el-row>
          </div>
        </el-row>
        <el-row>
          <!-- 该高度相对的是 container -->
          <el-carousel :interval="5000" arrow="hover" indicatorPosition="none" height="68.46%">
            <el-carousel-item v-for="item in image" :key="item" :style="{ background: `url(${item})` , backgroundSize: '100% 100%' }">
              <!-- <div :style="{ width: '100%', paddingTop: '75%', background: `url(${item})`,  }" ></div> -->
            </el-carousel-item>
          </el-carousel>
        </el-row>
      </el-col>

      <el-col :span="12">
        <div v-for="item in text" class="paragraph">
          {{ item }}
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>

  export default {
    data() {
      return {

      };
    },
    computed: {
      text() {
        return [ ...this.$store.state.department.cr.text ];
      },
      image() {
        return [ ...this.$store.state.department.cr.imgUrl ];
      }
    }
  }
</script>

<style scoped>
  #container{
    width: 100%;
    height: 100%;
  }

  #name{
    padding-top: 2vh;
    font: 500 72px/80px "PingFang SC";
    color: #4D4D4D;
    text-align: right;
    letter-spacing: 22px;
  }

  #ename{
    font: 300 40px/50px "PingFang SC";
    color: #4D4D4D;
    text-align: right;
    letter-spacing: 5px;
  }

  .paragraph{
    padding: 2.3vh 0% 0% 3%;
    font: 300 21px/34px "PingFang SC";
    text-indent: 2em;
  }

  .el-carousel {
    margin: 2.7% 0 0 4.3%;
    width: 96%;
  }

  .el-carousel__item {
    background: #fff;
  }

  @media (max-width: 1420px) {
    #name{
      padding-top: 2vh;
      font: 500 50px/56px "PingFang SC";
      letter-spacing: 9px;
    }

    #ename{
      font: 300 30px/40px "PingFang SC";
      letter-spacing: 2.4px;
    }

    .paragraph{
      font: 300 17px/25px "PingFang SC";
      text-indent: 2em;
    }
  }

  @media (max-width: 1700px) and (min-width: 1421px) {
    #name{
      padding-top: 2vh;
      font: 500 60px/65px "PingFang SC";
      letter-spacing: 13px;
    }

    #ename{
      font: 300 35px/45px "PingFang SC";
      letter-spacing: 2.5px;
    }

    .paragraph{
      font: 300 19px/30px "PingFang SC";
      text-indent: 2em;
    }
  }
</style>
