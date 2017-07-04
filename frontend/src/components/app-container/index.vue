<template>
  <div id="container">
    <router-view></router-view>
  </div>
</template>

<script>
  export default {
    name: 'app-container',
  };
</script>

<style scoped>
  #container{
    width: 100%;
    height: 100%;
  }
</style>
