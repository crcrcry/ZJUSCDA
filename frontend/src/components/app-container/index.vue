<template>
  <div id="container">
    <!--<home-page></home-page>-->
    <!--<association-page></association-page>-->
    <department-page></department-page>
  </div>
</template>

<script>
  import homePage from './home-page';
  import associationPage from './association-page';
  import departmentPage from './department-page';

  export default {
    name: 'app-container',
    components: {
      homePage, associationPage, departmentPage,
    },
  };
</script>

<style scoped>
  #container{
    width: 100%;
    height: 100%;
  }
</style>
