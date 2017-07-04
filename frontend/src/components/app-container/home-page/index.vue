<template>
  <div id="container">
    <div id="main-title-line" class="line">
      {{ mainTitle }}
    </div>
    <div id="sub-title-line" class="line">
      {{ subTitle }}
    </div>
    <div id="button-line">
      <div @click="skip">{{ btn.value }}</div>
    </div>
  </div>
</template>

<script>
  import '../../../animation.css';

  export default {
    name: 'home-page',
    computed: {
      mainTitle() {
        return this.$store.state.home.mainTitle;
      },
      subTitle() {
        return this.$store.state.home.subTitle;
      },
      btn() {
        return { ...this.$store.state.home.btn };
      },
    },
    methods: {
      skip() {
        const path = this.btn.href;
        this.$router.push(path);
      },
    },
  };
</script>

<style scoped>
  #container{
    width: 100%;
    height: 33vh;
  }

  .line{
    width: 100%;
    text-align: center;
  }

  #main-title-line{
    padding-top: 35vh;
    font: 500 74px/108px "PingFang SC";
    color: #4D4D4D;
  }

  #sub-title-line{
    font: 100 32px/48px "Avenir";
    color: #4D4D4D;
  }

  #button-line{
    width: 15%;
    padding-top: 3.1vh;
    padding-left: 44.8%;
  }

  #button-line div{
    width: 180px;
    height: 60px;

    background-color: #4D4D4D;
    text-align: center;
    font: 100 24px/60px "PingFang SC";
    color: #fff;
    border-radius: 5px;
    cursor: pointer;
  }

  @media (max-width: 1380px) {
    #main-title-line{
      padding-top: 33vh;
      font: 500 60px/96px "PingFang SC";
    }
  }

</style>
