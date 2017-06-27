<template>
  <div id="container">
    <el-row>
      <el-col :span="20" :offset="2" id="board">
        <el-row id="main">

          <div id="nav">
            <div id="nav-top" class="nav-item" @click="changeActivity(true)">
              精<br>品<br>活<br>动
            </div>
            <div id="nav-bottom" class="nav-item" @click="changeActivity(false)">
              内<br>部<br>建<br>设
            </div>
          </div>

          <div id="cards-area">
            <div v-for="(item, index) in outerActivity" key="item.name" class="card" :id="item.id" v-show="ifOuterActivity">
              <activity-card :name="item.name" :state="item.state"></activity-card>
            </div>
            <div v-for="(item, index) in innterActivity" key="item.name" class="card" :id="item.id" v-show="!ifOuterActivity">
              <activity-card :name="item.name" :state="item.state"></activity-card>
            </div>
          </div>
        </el-row>
      </el-col>
    </el-row>
  </div>
</template>

<script>
  import activityCard from './activity-card';

  export default {
    name: 'activity-page',
    data() {
      return {
        ifOuterActivity: true,
        outerActivity: [
          { id: 'c1', name: '名企之路', state: false },
          { id: 'c2', name: '职场精英训练营', state: false },
          { id: 'c3', name: '企业参观', state: true },
          { id: 'c4', name: '企业招聘专场', state: true },
        ],
        innterActivity: [
          { id: 'c1', name: '管理培训生', state: true },
          { id: 'c2', name: '素质拓展', state: false },
          { id: 'c3', name: '周年庆', state: false },
          { id: 'c4', name: '跨年日租别墅趴', state: false },
        ],
      };
    },
    methods: {
      changeActivity(boolVal) {
        this.ifOuterActivity = boolVal;
      },
    },
    components: {
      activityCard,
    },
  };
</script>

<style scoped>
  #container{
    width: 100%;
    height: 100%;
  }

  #board{
    margin-top: 8vh;
    height: 74vh;
    background-color: rgba(38, 70, 92, 0.7);
  }

  #main{
    height: 66vh;
    margin-top: 4vh;
  }

  #nav{
    height: 100%;
    width: 5.6%;
    padding-left: 1%;
    float: left;
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
    padding-top: 8vh;
    height: 25vh;
    border-bottom: 2px solid #979797;
  }

  #nav-bottom{
    padding-top: 5vh;
    height: 28vh;
    border-top: 2px solid #979797;
  }

  #cards-area{
    float:left;
    width: 64vw;
    margin: 1.4vh 5vw;
  }

  #c1{   }
  #c2{ left: 43vw;  }
  #c3{ top: 33vh; }
  #c4{ left: 43vw; top: 33vh; }

  .card{
    position: absolute;
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
