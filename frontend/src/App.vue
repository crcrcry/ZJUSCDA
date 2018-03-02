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
    data () {
      return {
        ifInfo: false,
      } 
    },
    components: {
      appContainer, appBottom, appHeader, blackboard
    },
    beforeMount() {
      this.showInfo(document.body.scrollWidth)
    },
    mounted() {
      window.addEventListener('resize', (function () {
        this.showInfo(document.body.scrollWidth)
      }).bind(this))
    },
    methods: {
      showInfo (width) {
        if(width < 1110 && !this.ifInfo){
          this.ifInfo = true
          this.$message({
            message: '您的屏幕页面宽度过低，不利于您获得最佳的访问体验。我们建议您在更大的页面中访问我们的网站。',
            type: 'warning',
            showClose: true,
            duration: 0,
            onClose: (function () {this.ifInfo = false }).bind(this)
          });
        }       
      }
    }
  };
</script>

<style scoped>
  #app {
    position: absolute;
    width: 100%;
    height: 100%;
    background: url("http://static.zjuscda.club/images/background.jpeg");
    background-size: 100% 100%;
  }

  @media screen and (max-width: 1080px) {
    #app {
      width: 1080px;
      /* overflow: scroll; */
    }
  }
  @media screen and (max-height: 560px) {
    #app {
      height: 560px;
      /* overflow: scroll; */
    }
  }

  #header {
    position: absolute;
    width: 100%;
    height: 48px;
  }

  #main {
    position: absolute;
    top: 48px;
    width: 100%;
    height: calc(100% - 92px);
  }

  #bottom {
    position: absolute;
    bottom: 0px;
    width: 100%;
    height: 44px;
  }

</style>
