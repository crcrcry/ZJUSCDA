<template>
  <div id="container">
    <div id="left-container">
      <header-title titleValue="SCDA"></header-title>
    </div>
    <div id="right-container">
      <header-nav></header-nav>
    </div>
  </div>
</template>

<script>
  import headerTitle from './header-title';
  import headerNav from './header-nav/';


  export default {
    name: 'app-header',
    components: {
      headerTitle, headerNav,
    },
  };
</script>

<style scoped>
  #container{
    width: 100%;
    height: 100%;
    background-color: #D8D8D8;
    opacity: 0.8;
  }

  #left-container{
    float: left;
    width: 30%;
    height: 100%;
  }

  #right-container{
    float: left;
    width: 70%;
    height: 100%;
  }
</style>
