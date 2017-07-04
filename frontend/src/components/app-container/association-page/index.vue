<template>
  <div id="container">
    <div id="left-container">
      <!--动画引导 div-->
      <div id="img-column">
        <div class="img" v-for="item in getImg" :style="item"></div>
      </div>
    </div>
    <div id="right-container">
      <div id="title" v-html="title"></div>
      <div v-for="(item, index) in descriptionArr" class="description" v-html="item" :key="index"></div>
    </div>
  </div>
</template>

<script>
  import '../../../animation.css';

  export default {
    name: 'association-page',
    computed: {
      title() {
        return this.$store.state.association.title;
      },
      descriptionArr() {
        return [ ...this.$store.state.association.description ];
      },
      imgUrlArr(){
        return [ ...this.$store.state.association.imgUrl ];
      },
      getImg() {
        const result = [];
        const length = this.imgUrlArr.length;

        for (let i = 0; i < length; i += 1) {
          const style = `background: url(${this.imgUrlArr[i]}); background-size: 100% 100%;`;
          result.push(style);
        }
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

    background-color: rgba(255, 255, 255, 0.8);
  }

  #left-container{
    float: left;
    margin-left: 3%;
    width: 61%;
    height: 100%;

    overflow: hidden;
    background-color: rgba(38, 70, 92, 0.75);
  }

  #img-column{
    margin-top: 0px;
    transition: margin-top 8s;
  }
  #img-column:hover{
    margin-top: -55vh;
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
    font: 600 40px/60px "PingFang SC";
  }

  .description{
    padding: 0vh 14% 0vh 14%;

    color: #4D4D4D;
    font: 400 22px/36px "PingFang SC";
    text-indent: 2em;
  }

  @media (max-width: 1300px){
    #title{
      font: 600 32px/48px "PingFang SC";
    }

    .description{
      font: 400 18px/27px "PingFang SC";
    }
  }
</style>
