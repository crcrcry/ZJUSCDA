<template>
  <div id="container">
    <el-row type="flex" justify="center" align="middle">
      <el-col v-for="(item, index) in memberInfo" :span="8" :key="index" class="column">
        <div class="memberCard">
          <el-row class="image">
            <div @mouseenter="showText(index)" style="width: 36vh; height: 54vh">
              <div v-show="item.isTextShow" class="text"@mouseout="hideText(index)">
                {{ item.text }}
              </div>
            </div>
          </el-row>
          <el-row class="simpleIntro">
            <div class="name">{{ item.name }}</div>
            <div class="brief">{{ item.brief }}</div>
          </el-row>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
  export default {
    name: 'member',
    data() {
      return {
        memberInfo: [
          {
            name: '陈然',
            brief: '苟利艾斯蒂生死以，岂因学习避趋之。',
            text: '打造专业、成熟、真诚服务的精英团队，致力于浙大学子的职业规划和发展，依托浙江大学的名牌效应和人才优势，帮助学生树立正确的职业价值观和职业发展观，搭建学校、学生和企业之间的沟通桥梁。',
            isTextShow: false,
          },
          {
            isTextShow: false,
          },
          {
            isTextShow: false,
          },
        ],
      };
    },
    methods: {
      showText(id) {
        this.memberInfo[id].isTextShow = true;
      },
      hideText(id) {
        this.memberInfo[id].isTextShow = false;
      },
    },
  };
</script>

<style scoped>
  #container{
    width: 100%;
    height: 100%;
    padding: 0;
  }

  .column{
    padding: 0;
  }

  .memberCard{
    margin: auto;
    width: 36vh;
    height: 72.4vh;

    background-color: rgba(38,70,92,0.9);
  }

  .image{
    width: 36vh;
    height: 54vh;
    background: url("../../../../static/images/member/council/chenran3.jpg");
    background-size: 100% 100%;
  }

  .simpleIntro{
    padding: 1.3vh 2vh;
  }

  .name{
    margin: 2vh 0;
    font: 400 30px/30px "PingFang SC";
    color: rgb(216, 216, 216);
  }

  .brief{
    font: 100 22px/26px "PingFang SC";
    color: rgb(208, 208, 208);
  }

  .text{
    width: 80%;
    height: 60%;
    padding: 30% 10%;

    background-color: #000;
    opacity: 0.8;
    font: 100 22px/30px "PingFang SC";
    color: rgb(208, 208, 208);
  }

  /* 文本好像不够美，怎么改个更好看的呢 */
  /*.text2{*/
    /*margin: 3% 3%;*/
    /*width: 74%;*/
    /*height: 56%;*/
    /*padding: 30% 10%;*/

    /*background-color: #000;*/
    /*opacity: 0.8;*/
    /*font: 100 21px/26px "PingFang SC";*/
    /*color: rgb(208, 208, 208);*/
  /*}*/

  @media (max-width: 1380px) {
    .text{
      font: 100 18px/24px "PingFang SC";
    }

    /*.text2{*/
      /*font: 100 16px/22px "PingFang SC";*/
    /*}*/

    .name{
      font: 400 24px/28px "PingFang SC";
      color: rgb(216, 216, 216);
    }

    .brief{
      font: 100 18px/22px "PingFang SC";
      color: rgb(208, 208, 208);
    }
  }
</style>
