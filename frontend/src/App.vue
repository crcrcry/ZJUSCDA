<template>
  <div id="app">
    <blackboard></blackboard>
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
  import blackboard from './components/blackboard';

  export default {
    name: 'app',
    components: {
      appContainer, appBottom, appHeader, blackboard
    },
  };
</script>

<style scoped>
  #app {
    width: 100vw;
    height: 100vh;
    background: url("http://static.zjuscda.club/images/background.jpeg");
    background-size: 100% 100%;
    min-height: 720px;
    min-width: 1080px;
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
