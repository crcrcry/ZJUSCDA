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
    position: absolute;
    left: 3%;
    width: 94%;
    height: 100%;

    background-color: rgba(255, 255, 255, 0.8);
  }

  #left-container{
    position: absolute;
    left: 3%;
    width: 61%;
    height: 100%;

    overflow-x: hidden;
    overflow-y: scroll;
    background-color: rgba(38, 70, 92, 0.75);
  }

  #img-column{
    margin-top: -30px;
    /* transition: margin-top 17s linear; */
  }
  /* #img-column:hover{
    margin-top: -200vh;
  } */
  .img{
    width: 91.3%;
    padding-top: 68.5%; 
    margin-left: 4.3%;
    margin-top: 30px;
  }

  #right-container{
    position: absolute;
    left: 64%;
    width: 35%;
    height: 100%;
    overflow: hidden;
  }

  #title{
    padding: 4vh 13% 4vh 13%;
    color: #4D4D4D;
    font: 600 34px/50px "PingFang SC";
  }

  .description{
    padding: 0vh 12.7% 0vh 13%;

    color: #4D4D4D;
    font: 400 18px/26px "PingFang SC";
    text-indent: 2em;
  }

  @media (max-width: 1550px) and (min-width: 1371px) {
    #title{
      padding: 4vh 13% 4vh 13%;
      font: 600 34px/50px "PingFang SC";
    }

    .description{
      padding: 0vh 12.7% 0vh 13%;
      font: 400 15px/23px "PingFang SC";
    }
  }
  @media (max-width: 1370px){
    #title{
      padding: 3.7vh 12% 3.2vh 13%;
      font: 600 27px/42px "PingFang SC";
    }

    .description{
      font: 400 13px/19px "PingFang SC";
    }
  }
</style>
