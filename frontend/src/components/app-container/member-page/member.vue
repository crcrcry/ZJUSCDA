<template>
  <div id="container">
    <el-row type="flex" justify="center" align="middle">
      <el-col v-for="(item, index) in nowMember" :span="8" :key="item.name" class="column">
        <div class="memberCard">
          <el-row class="image">
            <div :style="imgStyle[index]">
              <div @mouseenter="showText(index)" style="width: 36vh; height: 54vh">
                <div v-show="item.isTextShow" class="text" @mouseout="hideText(index)" v-html="item.text">
                </div>
              </div>
            </div>
          </el-row>
          <el-row class="simpleIntro">
            <div class="name">{{ item.name }}</div>
            <div class="brief">{{ item.brief }}</div>
          </el-row>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
  export default {
    name: 'member',
    props: {
      offset: {
        type: Number,
        required: true,
      },
      member: {
        required: true,
      },
    },
    computed: {
      nowMember() {
        const offset = this.offset;
        return this.member.slice(offset*3, (offset+1)*3);
      },
      imgStyle(){
        const obj = [];
        for(let i = 0; i < this.nowMember.length; i++){
          obj.push({
            background: `url(${this.nowMember[i].img})`,
            backgroundSize: '100% 100%',
          });
        }
        return obj;
      },
    },
    methods: {
      showText(id) {
        this.nowMember[id].isTextShow = true;
      },
      hideText(id) {
        this.nowMember[id].isTextShow = false;
      },
    },
  };
</script>

<style scoped>
  #container{
    width: 100%;
    height: 100%;
    padding: 0;
  }

  .column{
    padding: 0;
  }

  .memberCard{
    margin: auto;
    width: 36vh;
    height: 72.4vh;

    background-color: rgba(38,70,92,0.9);
  }

  .image{
    width: 36vh;
    height: 54vh;
  }

  .simpleIntro{
    padding: 0.8vh 2vh;
  }

  .name{
    margin: 2vh 0;
    font: 400 30px/30px "PingFang SC";
    color: rgb(216, 216, 216);
  }

  .brief{
    font: 100 21px/26px "PingFang SC";
    color: rgb(208, 208, 208);
  }

  .text{
    width: 80%;
    height: 83%;
    padding: 17% 10% 10% 10%;

    background-color: #000;
    opacity: 0.8;
    font: 100 22px/26px "PingFang SC";
    color: rgb(208, 208, 208);
  }

  @media(max-width: 1700px) and (min-width: 1381px){
    .name{
      font: 400 25px/25px "PingFang SC";
    }

    .brief{
      font: 100 17px/20px "PingFang SC";
    }

    .text{
      height: 84%;
      padding: 16% 10% 10% 10%;

      font: 100 17px/22px "PingFang SC";
      color: rgb(208, 208, 208);
    }
  }

  @media (max-width: 1380px) {
    .text{
      padding: 15% 10% 10% 10%;
      height: 85%;
      font: 100 14px/18px "PingFang SC";
    }

    .name{
      font: 400 22px/24px "PingFang SC";
      color: rgb(216, 216, 216);
    }

    .brief{
      font: 100 14px/18px "PingFang SC";
      color: rgb(208, 208, 208);
    }
  }
</style>
