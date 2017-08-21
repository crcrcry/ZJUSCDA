<template>
  <div id="container" :style="backgroundStyle">
    <div id="info" @click="openBlackboard">
      <div id="name">{{ name }}</div>
      <div class="button" :class="state?'button-yes':'button-no'">{{ btnValue }}</div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'outer-activity',
    props: {
      name: {
        type: String,
        required: true,
      },
      state: {
        type: Boolean,
        required: true,
      },
      background: {
        type: String,
        required: true,
      }
    },
    computed: {
      btnValue() {
        return (this.state ? '报名中' : '未开启');
      },
      backgroundStyle() {
        return {
          background: `url(${this.background})`,
          backgroundSize: '100% 100%',
        };
      },
    },
    methods: {
      openBlackboard() {
        this.$store.dispatch('switchBlackboard', {
          value: true,
          name: this.name,
        });
      },
    },
  };
</script>

<style scoped>
  #container{
    width: 29.33vw;
    height: 27.5vh;
    margin: 2vh 1.7vw;
    position: absolute;
  }

  #info{
    padding: 1vh 0.6vw;
    width: 14vw;
    height: 25.5vh;
    background-color: rgba(216, 216, 216, 0.9);
    cursor: pointer;
  }

  #name{
    color: #26465C;
    font: 100 50px/60px "PingFang SC";
  }

  .button{
    width: 6.64vw;
    height: 4.5vh;
    border-radius: 24px;
    position: absolute;
    left: 6.7vw;
    top: 21vh;

    font: 100 22px/4.5vh "PingFang SC";
    border: 1px solid #26465C;

    text-align: center;
  }

  .button-no{
    color: #26465C;
  }

  .button-yes{
    color: #fff;
    background-color: #26465C;
  }

  @media (max-width: 1510px) {
    #name{
      font: 100 38px/51px "PingFang SC";
    }

    .button{
      border-radius: 20px;

      font: 100 18px/4.5vh "PingFang SC";
      border: 1px solid #26465C;
    }
  }

</style>
