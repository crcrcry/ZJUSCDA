<template>
  <div id="container">
    <div id="board">
      <div id="nav">
        <div id="nav-top" class="nav-item" @click="changeActivity(true)">
          精<br>品<br>活<br>动
        </div>
        <div id="nav-bottom" class="nav-item" @click="changeActivity(false)">
          内<br>部<br>建<br>设
        </div>
      </div>

      <div id="cards-area">
        <transition name="fade-quick" mode="out-in">
          <div style="width: 100%; height: 100%" v-if="ifOuterActivity" key="1">
            <div v-for="(item, index) in outerActivity" :key="item.name" class="card" :id="item.id">
              <outer-activity :name="item.name" :state="item.state" :background="item.cardImgUrl"></outer-activity>
            </div>
          </div>
          <div style="width: 100%; height: 100%" v-else key="2"> 
              <inner-activity></inner-activity>
          </div>
        </transition>
      </div>
    </div>
  </div>
</template>

<script>
  import '../../../animation.css';
  import outerActivity from './outer-activity';
  import innerActivity from './inner-activity';

  export default {
    name: 'activity-page',
    computed: {
      ifOuterActivity() {
        return this.$store.state.activity.ifOuterActivity;
      },
      outerActivity() {
        return this.$store.state.activity.outerActivity;
      },
    },
    methods: {
      changeActivity(boolVal) {
        this.$store.dispatch('activity/changeActivityType', {
          ifOuterActivity: boolVal,
        })
      },
    },
    components: {
      outerActivity, innerActivity,
    },
  };
</script>

<style scoped>
  #container{
    position: absolute;
    width: 100%;
    height: 100%;
  }

  #board{
    position: absolute;
    top: 7%;
    left: 7%;
    width: 86%;
    height: 86%;
    background-color: rgba(38, 70, 92, 0.7);
  }

  #nav{
    position: absolute;
    height: 93%;
    width: 5.6%;
    left: 1%;
    top: 7%;
  }
  .nav-item{
    width: 100%;
    color: #fff;
    border-right: 3px solid #979797;
    font: 400 34px/54px "PingFang SC";
    text-align: center;
    cursor: pointer;
  }
  #nav-top{
    padding-top: 3vh;
    padding-bottom: 4.8vh;
    height: 25vh;
    border-bottom: 2px solid #979797;
  }
  #nav-bottom{
    padding-top: 3.8vh;
    height: 28vh;
    border-top: 2px solid #979797;
  }

  #cards-area{
    position: absolute;
    left: 6.6%;
    width: 94.4%;
    height: 100%;
  }

  #c1{ left: 7%; top: 10%;  }
  #c2{ left: 50%; top: 10%;  }
  #c3{ left: 7%; top: 53%;  }
  #c4{ left: 50%; top: 53%;  }

  .card{
    position: absolute;
    width: 35%;
    height: 37%;
  }

  @media (max-width: 1420px) {
    .nav-item{
      font: 400 24px/40px "PingFang SC";
    }
  }

  @media (max-width: 1700px) and (min-width: 1421px){
    .nav-item{
      font: 400 30px/48px "PingFang SC";
    }
  }

</style>
