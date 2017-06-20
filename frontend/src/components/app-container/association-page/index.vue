<template>
  <div id="container">
    <div id="left-container">
      <div class="img" v-for="item in getImg" :style="item"></div>
    </div>
    <div id="right-container">
      <div id="title" v-html="title"></div>
      <div class="description" v-html="description"></div>
      <div class="description" v-html="description"></div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'association-page',
    data() {
      return {
        title: '浙江大学<br>学生就业与职业发展协会',
        description: '打造专业、成熟、真诚服务的精英团队，致力于浙大学子的职业规划和发展，依托浙江大学的名牌效应和人才优势，帮助学生树立正确的职业价值观和职业发展观，搭建学校、学生和企业之间的沟通桥梁，努力为学生拓展职业发展资源，为提升浙大学子竞争力而不懈努力。',
        imgUrl: [
          '../../../../static/images/association/1.jpeg',
          '../../../../static/images/association/1.jpeg',
          '../../../../static/images/association/1.jpeg',
        ],
      };
    },
    computed: {
      getImg() {
        const result = [];
        const length = this.imgUrl.length;

        for (let i = 0; i < length; i += 1) {
          const style = `background: url(${this.imgUrl[i]}); background-size: 100% 100%;`;
          result.push(style);
        }
        result[0] += 'margin-top: -180px;';

        return result;
      },
    },
  };
</script>

<style scoped>
  #container{
    margin-left: 3%;
    width: 94%;
    height: 100%;

    background-color: rgba(255, 255, 255, 0.7);
  }

  #left-container{
    float: left;
    margin-left: 3%;
    width: 61%;
    height: 100%;

    overflow: hidden;
    background-color: rgba(38, 70, 92, 0.7);
  }

  .img{
    height: 44vh;
    width: 91.3%;
    margin-left: 4.3%;
    margin-top: 30px;
  }

  #right-container{
    float: left;
    width: 35%;
    height: 100%;
    overflow: hidden;
  }

  #title{
    padding: 5vh 14% 5vh 14%;
    color: #4D4D4D;
    font: 600 36px/50px "PingFang SC";
  }

  .description{
    padding: 0vh 14% 0vh 14%;

    color: #4D4D4D;
    font: 400 20px/32px "PingFang SC";
    text-indent: 2em;
  }
</style>
