<template>
  <div id="container">
    <el-row :gutter="10">
      <el-col :span="12">
        <div v-for="item in text" class="paragraph">
          {{ item }}
        </div>
      </el-col>

      <el-col :span="12" id="title">
        <el-row>
          <div>
            <el-row id="name">项目管理中心</el-row>
            <el-row id="ename">Project Management Center</el-row>
          </div>
        </el-row>
        <el-row>
          <el-carousel :interval="5000" arrow="hover" indicatorPosition="none" height="41vh">
            <el-carousel-item v-for="item in image" :key="item">
              <img :src="item" style="width: 100%; height: 100%;" />
            </el-carousel-item>
          </el-carousel>
        </el-row>
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
        return [ ...this.$store.state.department.pm.text ];
      },
      image() {
        return [ ...this.$store.state.department.pm.imgUrl ];
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
    padding-left: 3vw;
    padding-top: 1.7vh;
    font: 500 72px/78px "PingFang SC";
    color: #4D4D4D;
    text-align: left;
    letter-spacing: 22px;
  }

  #ename{
    padding-left: 3vw;
    font: 300 40px/50px "PingFang SC";
    color: #4D4D4D;
    text-align: left;
    letter-spacing: 3.7px;
  }

  .paragraph{
    padding: 2.3vh 0% 0% 3%;
    font: 300 24px/34px "PingFang SC";
    text-indent: 2em;
  }

  .el-carousel {
    margin-left: 2.6vw;
    margin-top: 1.5vh;
  }

  .el-carousel__item {
    background: #fff;
  }

  @media (max-width: 1420px) {
    #name{
      padding-top: 2vh;
      font: 500 50px/55px "PingFang SC";
      letter-spacing: 9px;
    }

    #ename{
      font: 300 30px/40px "PingFang SC";
      letter-spacing: 2px;
    }

    .paragraph{
      font: 300 17.5px/21.5px "PingFang SC";
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
      font: 300 34px/50px "PingFang SC";
      letter-spacing: 2.7px;
    }

    .paragraph{
      font: 300 22px/28px "PingFang SC";
      text-indent: 2em;
    }
  }
</style>
