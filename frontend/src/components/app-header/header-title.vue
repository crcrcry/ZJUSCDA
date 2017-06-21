<template>
  <div id="container">
    <router-link to="/">{{ titleValue }}</router-link>
  </div>
</template>

<script>
  export default {
    name: 'header-title',
    props: {
      titleValue: {
        type: String,
        default: 'SCDA',
        required: true,
      },
    },
  };
</script>

<style scoped>
  #container{
    height: 100%;
    width: 102px;
    line-height: 48px;
    padding-left: 30px;

    color: #4D4D4D;
    font: bold 24px/48px "PingFang SC";
    cursor: pointer;
  }

  a{
    text-decoration: none;
  }

  a:visited{
    color: #4D4D4D;
  }
</style>
