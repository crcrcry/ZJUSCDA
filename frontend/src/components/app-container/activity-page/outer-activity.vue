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
    width: 100%;
    height: 100%;
    position: absolute;
  }

  #info{
    position: absolute;
    width: 55%;
    height: 100%;
    background-color: rgba(216, 216, 216, 0.9);
    cursor: pointer;
  }

  #name{
    padding: 5% 0 0 5%;
    color: #26465C;
    font: 100 42px/60px "PingFang SC";
  }

  .button{
    width: 44%;
    height: 4.8vh;
    border-radius: 24px;
    position: absolute;
    left: 48%;
    top: 75%;

    font: 100 24px/4.8vh "PingFang SC";
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

      font: 100 20px/4.8vh "PingFang SC";
      border: 1px solid #26465C;
    }
  }

</style>
