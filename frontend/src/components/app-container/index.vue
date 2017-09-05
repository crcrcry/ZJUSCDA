<template>
  <div id="container">
    <transition name="fade" mode="out-in">
      <router-view></router-view>
    </transition>
  </div>
</template>

<script>
  import '../../animation.css';

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
