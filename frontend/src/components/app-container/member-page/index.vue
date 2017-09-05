<template>
  <div id="container">
    <el-row id="content">
      <el-col :span="2">
        <div class="arrowDiv">
          <i class="el-icon-arrow-left" @click="changeOffset(-1)"></i>
        </div>
      </el-col>
      <el-col :span="20">
        <div id="main">
          <member :offset="offset" :member="member"></member>
        </div>
      </el-col>
      <el-col :span="2">
        <div class="arrowDiv">
          <div class="arrowRound">
            <i class="el-icon-arrow-right" @click="changeOffset(1)"></i>
          </div>
        </div>
      </el-col>
    </el-row>

    <el-row>
      <div id="nav">
        <div v-for="(item, index) in department" :key="item.id">
          <div class="round" :style="navOpacity[index]" @click="changeDepartment(item.brief)">
            {{ item.name }}
          </div>
        </div>
      </div>
    </el-row>
  </div>
</template>

<script>
  import Utils from '../../../Utils';
  import member from './member';

  export default {
    name: 'member-page',
    data() {
      return {
        department: Utils.getDepartmentName(),
        navOpacity: ['opacity: 0.8', 'opacity: 0.6', 'opacity: 0.6', 'opacity: 0.8', 'opacity: 0.6'],
      };
    },
    computed: {
      offset() {
        return this.$store.state.member.offset;
      },
      member() {
        const department = this.$store.state.member.department;
        return this.$store.state.member.members[department];
      },
    },
    methods: {
      changeDepartment(department) {
        this.$store.dispatch('member/changeDepartment', {
          department: department,
        });
      },
      changeOffset(direction){
        this.$store.dispatch('member/changeOffset', {
          direction: direction,
        });
      }
    },
    components: {
      member,
    },
  };
</script>

<style scoped>
  #container{
    width: 100%;
    height: 92.4%;
    padding-top: 4vh;
  }

  #content{
    background-color: rgba(38,70,92,0.7);
  }

  #main{
    height: 72.4vh;
    padding: 0vh;
  }

  i{
    color: #ececec;
    font: 100 72px/0vh "";
    opacity: 0.8;
    cursor: pointer;
  }

  .arrowDiv{
    height: 10vh;
    padding-top: 32vh;

    text-align: center;
  }

  #nav{
    padding-top: 2.6vh;
    padding-left: 15.8%;
  }

  .round{
    float: left;
    margin-left: 10%;
    width: 6.5vh;
    height: 6.5vh;
    border-radius: 3.25vh;
    text-align: center;
    font: 400 20px/6.5vh "PingFang SC";
    background-color: #26465C;
    cursor: pointer;
    color: #fff;
  }

  @media (max-width: 1300px) {
    #nav{
      padding-top: 1vh;
    }

    .round{
      font-size: 18px;
    }
  }
</style>
