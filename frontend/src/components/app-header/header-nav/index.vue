<template>
  <div id="container">
    <div class="sub" v-for="(item, index) in navArr" :key="item.id" >
      <router-link :to="item.path">
        <nav-button :value="item.name"></nav-button>
      </router-link>
    </div>
  </div>
</template>

<script>
  import navButton from './nav-button';
  import Utils from '../../../Utils/';

  export default {
    name: 'header-nav',
    data() {
      return {
        navArr: Utils.getNavName(),
      };
    },
    components: {
      navButton,
    },
  };
</script>

<style scoped>
  #container{
    width: 540px;
    height: 48px;

    padding-left: calc(100% - 540px);
  }

  .sub{
    float: left;
  }

  a{
    text-decoration: none;
  }
</style>
