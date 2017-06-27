<template>
  <div id="app">
    <div id="blackboard" @click="switchBlackboard" v-show="ifShowBlackboard"></div>
    <div id="header">
      <app-header></app-header>
    </div>
    <div id="main">
      <app-container></app-container>
    </div>
    <div id="bottom">
      <app-bottom></app-bottom>
    </div>
  </div>
</template>

<script>
  import appHeader from './components/app-header';
  import appContainer from './components/app-container';
  import appBottom from './components/app-bottom';

  export default {
    name: 'app',
    data() {
      return {
        ifShowBlackboard: true,
      };
    },
    components: {
      appContainer, appBottom, appHeader,
    },
    methods: {
      switchBlackboard() {
        this.ifShowBlackboard = !this.ifShowBlackboard;
      },
    },
  };
</script>

<style scoped>
  #app {
    width: 100vw;
    height: 100vh;
    background: url("../static/images/background.jpeg");
    background-size: 100% 100%;
    min-height: 720px;
    min-width: 1080px;
  }

  #blackboard{
    position: absolute;
    width: 100vw;
    height: 100vh;

    background-color: rgba(0, 0, 0, 0.75);
    z-index: 10;
    cursor: pointer;
  }

  #header {
    width: 100%;
    height: 48px;
  }

  #main {
    width: 100%;
    height: calc(100% - 92px);
  }

  #bottom {
    width: 100%;
    height: 44px;
  }

</style>
