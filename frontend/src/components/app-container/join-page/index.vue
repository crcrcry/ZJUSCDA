<template>
  <div id="container">
    <div id="board">
      <form-board></form-board>
    </div>
  </div>
</template>

<script>
  import formBoard from './form-board';

  export default {
    name: 'join-page',
    components: {
      formBoard,
    },
  };
</script>

<style scoped>
  #container{
    width: 93.75vw;
    height: 77vh;
    padding: 6.25vh 3.125vw;
  }

  #board{
    width: 93.75vw;
    height: 77vh;
    background-color: rgba(255, 255, 255, 0.6);
    border-radius: 30px;
    box-shadow: 3px 3px 2px rgba(0, 0, 0, 0.5);
  }
</style>
