<template>
  <div id="container">
    {{ value }}
  </div>
</template>

<script>
  export default {
    name: 'nav-button',
    props: {
      value: {
        type: String,
        required: true,
      },
    },
  };
</script>

<style scoped>
  #container{
    width: 105px;
    height: 48px;
    text-align: center;
    padding-left: 0px;

    color: #4D4D4D;
    font: bold 18px/48px "PingFang SC";
    cursor: pointer;
  }
</style>
