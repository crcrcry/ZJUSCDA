<template>
  <div id="container">
    <div id="left-container" class="text">
      {{ copyright }}
    </div>
    <div id="right-container" class="text">
      <span @click="show">{{ contact }}</span>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'app-bottom',
    computed: {
      copyright() {
        return this.$store.state.copyright;
      },
      contact() {
        return this.$store.state.contact;
      }
    },
    methods: {
      show(){
        alert(this.$store.state.usInfo.message);
//        this.$notify.info({...this.$store.state.usInfo}); 换行不方便不好用
      }
    }
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
    width: calc(49% - 30px);
    height: 100%;
    float: left;
    padding-left: 30px;
  }

  #right-container{
    width: calc(49.8% - 25px);
    height: 100%;
    float: left;
    text-align: right;
    padding-right: 25px;
  }

  .text{
    font: bold 18px/44px "PingFang SC";
    color: #4D4D4D;
  }

  span{
    cursor: pointer;
  }
</style>
