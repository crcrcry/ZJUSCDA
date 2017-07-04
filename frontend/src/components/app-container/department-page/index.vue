<template>
  <div id="container">
    <el-row id="content">
      <el-col :span="2">
        <div class="arrowDiv">
          <i class="el-icon-arrow-left" @click="changeDepartment(-1)"></i>
        </div>
      </el-col>
      <el-col :span="20">
        <div id="main">
          <router-view></router-view>
        </div>
      </el-col>
      <el-col :span="2">
        <div class="arrowDiv">
          <i class="el-icon-arrow-right" @click="changeDepartment(1)"></i>
        </div>
      </el-col>
    </el-row>

    <el-row>
      <div id="nav">
        <router-link v-for="(item, index) in needDepartment" :to="item.path" :key="item.id">
          <div class="round" :style="navOpacity[index%2]">
            {{ item.name }}
          </div>
        </router-link>
      </div>
    </el-row>
  </div>
</template>

<script>
  import Utils from '../../../Utils';
  import '../../../animation.css';

  export default {
    name: 'department-page',
    data() {
      return {
        department: Utils.getDepartmentName(),
        navOpacity: ['opacity: 0.6', 'opacity: 0.8'],
      };
    },
    computed: {
      needDepartment() {
        const needDepartmentObj = [...this.department];
        needDepartmentObj.splice(2, 1);
        needDepartmentObj.forEach((item, index) => {
          needDepartmentObj[index].path = `/department/${item.id}`;
        });
        return needDepartmentObj;
      },
    },
    methods: {
      changeDepartment(direction) {
        const path = this.$route.path === '/department' ? '/department/humanResource' : this.$route.path;
        let positon;
        this.needDepartment.find((value, index) => {
          if(path == value.path) positon = index;
        });
        // left
        if(direction == -1){
          if(positon > 0){
            this.$router.push(this.needDepartment[positon-1].path);
          }
        }
        // right
        else if(direction == 1) {
          if(positon < 3){
            this.$router.push(this.needDepartment[positon+1].path);
          }
        }
      },
    },
  };
</script>

<style scoped>
  #container{
    width: 100%;
    height: 100%;
  }

  #content{
    padding-top: 7.6vh;
  }

  #main{
    background-color: rgba(255,255,255,0.8);
    height: 58.4vh;
    padding: 5vh 2.5%;
  }

  i{
    color: rgb(163,163,164);
    font-weight: 900;
    font-size: 72px;
    cursor: pointer;
  }

  .arrowDiv{
    height: 10vh;
    padding-top: 32vh;

    text-align: center;
  }

  #nav{
    padding-top: 4vh;
    padding-left: 14.5%;
  }

  .round{
    float: left;
    margin-left: 13.6%;
    width: 6.4vh;
    height: 6.4vh;
    border-radius: 3.2vh;
    text-align: center;
    font: 400 29px/6.4vh "PingFang SC";
    background-color: #26465C;
    cursor: pointer;
  }


  a{
    text-decoration: none;
    color: #fff;
  }

  a:visited{
    color: #fff;
  }

  @media (max-width: 1300px) {
    #nav{
      padding-top: 3.5vh;
    }

    .round{
      font-size: 23px;
    }
  }
</style>
