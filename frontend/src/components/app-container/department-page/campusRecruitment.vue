<template>
  <div id="container">
    <el-row :gutter="10">
      <el-col :span="12">
        <el-row id="name">校园招聘中心</el-row>
        <el-row id="ename">Campus Recruitment Center</el-row>
      </el-col>

      <el-col :span="12">
        <el-row>
          <el-col :span="12"><div class="img"></div></el-col>
          <el-col :span="12"><div class="img"></div></el-col>
        </el-row>
      </el-col>
    </el-row>

    <el-row :gutter="10">
      <el-col :span="12">
        <el-row>
          <el-col :span="12"><div class="img"></div></el-col>
          <el-col :span="12"><div class="img"></div></el-col>
        </el-row>

        <el-row>
          <el-col :span="12"><div class="img"></div></el-col>
          <el-col :span="12"><div class="img"></div></el-col>
        </el-row>
      </el-col>

      <el-col :span="12">
        <div class="paragraph">
          打造专业、成熟、真诚服务的精英团队，致力于浙大学子的职业规划和发展，依托浙江大学的名牌效应和人才优势，帮助学生树立正确的职业价值观和职业发展观，搭建学校、学生和企业之间的沟通桥梁，努力为学生拓展职业发展资源，为提升浙大学子竞争力而不懈努力。
        </div>
        <div class="paragraph">
          打造专业、成熟、真诚服务的精英团队，致力于浙大学子的职业规划和发展，依托浙江大学的名牌效应和人才优势。
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
  export default {
    name: 'campusRecruitment',
  };
</script>

<style scoped>
  #container{
    width: 100%;
    height: 100%;
  }

  .img{
    margin: 0.8vh 1vw;
    width: 95%;
    height: 17.8vh;
    background: url("../../../../static/images/department/campusRecruitment/1.jpeg");
    background-size: 100% 100%;
    opacity: 1;
  }

  #name{
    padding-top: 2.2vh;
    font: 500 72px/90px "PingFang SC";
    color: #4D4D4D;
    text-align: right;
    letter-spacing: 22px;
  }

  #ename{
    font: 300 40px/54px "PingFang SC";
    color: #4D4D4D;
    text-align: right;
    letter-spacing: 5px;
  }

  .paragraph{
    padding: 2.3vh 0% 0% 3%;
    font: 300 24px/34px "PingFang SC";
    text-indent: 2em;
  }

  @media (max-width: 1420px) {
    #name{
      padding-top: 2.1vh;
      font: 500 56px/70px "PingFang SC";
      letter-spacing: 9px;
    }

    #ename{
      font: 300 30px/42px "PingFang SC";
      letter-spacing: 2.4px;
    }

    .paragraph{
      font: 300 19px/24px "PingFang SC";
      text-indent: 2em;
    }
  }

  @media (max-width: 1700px) and (min-width: 1421px) {
    #name{
      padding-top: 2.2vh;
      font: 500 72px/90px "PingFang SC";
      letter-spacing: 13px;
    }

    #ename{
      font: 300 36px/54px "PingFang SC";
      letter-spacing: 4.2px;
    }

    .paragraph{
      font: 300 24px/32px "PingFang SC";
      text-indent: 2em;
    }
  }
</style>
