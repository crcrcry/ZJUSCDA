<template>
  <div id="container">
    <el-row id="content">
      <el-col :span="2">
        <div class="arrowDiv">
          <i class="el-icon-arrow-left"></i>
        </div>
      </el-col>
      <el-col :span="20">
        <div id="main">
          <router-view></router-view>
        </div>
      </el-col>
      <el-col :span="2">
        <div class="arrowDiv">
          <i class="el-icon-arrow-right"></i>
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
    background-color: #fff;
    height: 68.4vh;
    opacity: 0.7;
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
    padding-top: 4.7vh;
    padding-left: 14.5%;
  }
  .round{
    float: left;
    margin-left: 13.6%;
    width: 44px;
    height: 44px;
    border-radius: 25px;
    text-align: center;
    font: 400 20px/44px "PingFang SC";
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
</style>
