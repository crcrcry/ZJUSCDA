<template>
  <div id="container">
    <el-row :gutter="10">
      <el-col :span="12">
        <div v-for="item in nowInfo.text" class="paragraph">
          {{ item }}
        </div>
      </el-col>

      <el-col :span="12">
        <el-row>
          <el-col :span="12"><div class="img" :style="imgStyleObj[0]"></div></el-col>
          <el-col :span="12"><div class="img" :style="imgStyleObj[1]"></div></el-col>
        </el-row>

        <el-row>
          <el-col :span="12"><div class="img" :style="imgStyleObj[2]"></div></el-col>
          <el-col :span="12"><div class="img" :style="imgStyleObj[3]"></div></el-col>
        </el-row>
      </el-col>
    </el-row>

    <el-row :gutter="10">
      <el-col :span="12">
        <el-row>
          <el-col :span="12"><div class="img" :style="imgStyleObj[4]"></div></el-col>
          <el-col :span="12"><div class="img" :style="imgStyleObj[5]"></div></el-col>
        </el-row>
      </el-col>

      <el-col :span="12" id="title">
        <div @click="switchStyle">
          <el-row id="name">公共关系中心</el-row>
          <el-row id="ename">Public Relation Center</el-row>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
  import '../../../animation.css';
  import Utils from '../../../Utils';

  export default {
    name: 'publicRelation',
    data() {
      return {
        ifStrict: 'true',
      };
    },
    computed: {
      allInfo() {
        return Utils.deepClone(this.$store.state.department.pr);
      },
      nowInfo() {
        return this.ifStrict ? this.allInfo.strict : this.allInfo.relax;
      },
      imgStyleObj() {
        const styleObj = [];
        const length = this.nowInfo.imgUrl.length;
        for(let i = 0; i < length; i++){
          styleObj.push({
            background: `url(${this.nowInfo.imgUrl[i]})`,
            backgroundSize: '100% 100%',
          });
        }
        return styleObj;
      }
    },
    methods: {
      switchStyle() {
        this.ifStrict = !this.ifStrict;
      },
    },
  };
</script>

<style scoped>
  #container{
    width: 100%;
    height: 100%;
  }

  .img{
    margin: 0.8vh 1vw;
    width: 95%;
    height: 17.8vh;
    opacity: 1;
  }

  #title{
    cursor: pointer;
  }

  #name{
    padding-top: 3.4vh;
    padding-left: 4%;
    font: 500 72px/90px "PingFang SC";
    color: #4D4D4D;
    text-align: left;
    letter-spacing: 22px;
  }

  #ename{
    padding-left: 4%;
    font: 300 40px/54px "PingFang SC";
    color: #4D4D4D;
    text-align: left;
    letter-spacing: 5px;
  }

  .paragraph{
    padding: 1.3vh 0% 0% 3%;
    font: 300 24px/34px "PingFang SC";
    text-indent: 2em;
  }

  @media (max-width: 1420px) {
    #name{
      font: 500 56px/70px "PingFang SC";
      letter-spacing: 9px;
    }

    #ename{
      font: 300 30px/42px "PingFang SC";
      letter-spacing: 2.4px;
    }

    .paragraph{
      font: 300 19px/24px "PingFang SC";
      text-indent: 2em;
    }
  }

  @media (max-width: 1700px) and (min-width: 1421px) {
    #name{
      font: 500 72px/90px "PingFang SC";
      letter-spacing: 13px;
    }

    #ename{
      font: 300 36px/54px "PingFang SC";
      letter-spacing: 4.2px;
    }

    .paragraph{
      font: 300 24px/32px "PingFang SC";
      text-indent: 2em;
    }
  }
</style>
