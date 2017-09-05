<template>
  <transition name="fade">
    <div id="container" @click="closeBlackboard" v-show="ifShowBlackboard">
      <el-row>
        <el-col :span="13">
          <el-row id="title">
            {{ info.name }}
          </el-row>
          <el-row id="paragraph">
            <p v-for="item in info.text">
              {{ item }}
            </p>
          </el-row>
        </el-col>
        <el-col :span="9" :offset="1">
          <el-row>
            <img class="img" :src="info.introImgUrl[0]">
          </el-row>
          <el-row>
            <img class="img" :src="info.introImgUrl[1]">
          </el-row>
        </el-col>
      </el-row>
    </div>
  </transition>
</template>

<script>
  import '../../animation.css';

  export default {
    name: 'blackboard',
    computed: {
      ifShowBlackboard() {
        return this.$store.state.ifShowBlackboard;
      },
      info() {
        const activityName = this.$store.state.blackboardName;
        const activityState = this.$store.state.activity;
        const activityArr = activityState.ifOuterActivity ? activityState.outerActivity : activityState.innerActivity;
        let position = 0;

        activityArr.find((value, index) => {
          if(value.name === activityName) position = index;
        });

        return activityArr[position];
      },
    },
    methods: {
      closeBlackboard() {
        this.$store.dispatch('switchBlackboard', {
          value: false,
          name: this.info.name,
        });
      },
    },
  };
</script>

<style scoped>
  #container{
    position: absolute;
    padding: 15vh 2vw 15vh 6vw;
    width: 92vw;
    height: 70vh;

    background-color: rgba(0, 0, 0, 0.8);
    z-index: 10;
    cursor: pointer;
  }

  #title{
    color: #fff;
    font: 400 64px/80px "PingFang SC";
    margin-bottom: 5vh;
  }

  #paragraph{
    color: #fff;
    font: 200 20px/33px "PingFang SC";
    text-indent: 40px;
  }

  .img{
    width: 28vw;
    height: 33vh;
    margin-bottom: 5vh;
  }

  @media (max-width: 1480px){
    #paragraph{
      font: 200 17px/30px "PingFang SC";
      text-indent: 34px;
    }
  }
</style>
