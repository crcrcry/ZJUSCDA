<template>
  <div id="container">
    <el-row id="title">
      SCDA秋季纳新报名表
    </el-row>

    <el-row id="form-area">
      <el-col :span="12">
        <el-row>
          <el-col :span="8">
            <el-row class="form-item">
              <span class="form-word">姓名: </span>
              <input type="text" style="width: 9.2vw">
              <hr class="left-hr">
            </el-row>
            <el-row class="form-item">
              <span class="form-word">学号: </span>
              <input type="text" style="width: 9.2vw">
              <hr class="left-hr">
            </el-row>
            <el-row class="form-item">
              <span class="form-word">校区: </span>
              <input type="text" style="width: 9.2vw">
              <hr class="left-hr">
            </el-row>
            <el-row class="form-item">
              <span class="form-word">推荐人: </span>
              <input type="text" style="width: 7.5vw">
              <hr class="left-hr">
            </el-row>
            <el-row class="form-item">
              <span class="form-word">是否服从调剂: </span>
              <input type="text" style="width: 2vw">
              <hr class="left-hr">
            </el-row>
          </el-col>
          <el-col :span="13" :offset="2">
            <el-row class="form-item">
              <span class="form-word">专业: </span>
              <input type="text" style="width: 7.4vw">
              <span class="form-word">&nbsp;年级: </span>
              <input type="text" style="width: 4.5vw">
              <hr>
            </el-row>
            <el-row class="form-item">
              <span class="form-word">长号: </span>
              <input type="text" style="width: 7.4vw">
              <span class="form-word">&nbsp;短号: </span>
              <input type="text" style="width: 4.5vw">
              <hr>
            </el-row>
            <el-row class="form-item">
              <span class="form-word">邮箱: </span>
              <input type="text" style="width: 17vw">
              <hr>
            </el-row>
            <el-row class="form-item">
              <span class="form-word">第一志愿: </span>
              <input type="text" style="width: 14vw">
              <hr>
            </el-row>
            <el-row class="form-item">
              <span class="form-word">第二志愿: </span>
              <input type="text" style="width: 14vw">
              <hr>
            </el-row>
          </el-col>
        </el-row>
        <el-row class="form-item">
          <span class="form-word question">问题一: 爱好、特长及技能</span>
          <textarea style="width: 41vw;"></textarea>
        </el-row>
      </el-col>

      <el-col :span="12" id="right-form">
        <el-row class="form-item">
          <span class="form-word question">问题二: 对所报部门的理解及您的优势</span>
          <textarea style="width: 39vw;"></textarea>
        </el-row>
        <el-row class="form-item">
          <el-row class="form-item">
            <span class="form-word">面试时间选择: </span>
            <input type="text" style="width: 10.2vw">
            <el-row id="time-pick">
              <el-col :span="7">
                <span class="time-item">A 9月1号 下午</span>
                <span class="time-item">B 9月1号 晚上</span>

              </el-col>
              <el-col :span="7" :offset="1">
                <span class="time-item">C 9月2号下午</span>
                <span class="time-item">D 9月2号晚上</span>
              </el-col>
              <el-col :span="7" :offset="1">
                <span class="time-item">E 9月3号下午</span>
                <span class="time-item">F 9月3号晚上</span>
              </el-col>
            </el-row>
          </el-row>
        </el-row>
        <el-row class="form-item">
          <el-col :span="5" class="form-word">简历提交: </el-col>
          <el-col :span="13" id="file-name">{{ form.fileName }}</el-col>
          <el-col :span="5" id="file">
            选择文件
            <input type="file" name="" @change="changeFile($event)">
          </el-col>
        </el-row>
        <el-row class="form-item">
          <el-col :span="5" :offset="12" class="button">重置</el-col>
          <el-col :span="5" :offset="2" class="button">提交</el-col>
        </el-row>
      </el-col>
    </el-row>
  </div>
</template>

<script>
  export default {
    name: 'form-board',
    data() {
      return {
        form: {
          name: '',
          fileName: '尚未选择简历文件',
        },
      };
    },
    methods: {
      changeFile(event) {
        const nowFileName = event.target.value;
        if (nowFileName === '') {
          this.form.fileName = '请选择您的简历文件';
        } else {
          this.form.fileName = nowFileName.substring(12);
        }
      },
    },
  };
</script>

<style scoped>
  #container{
    width: 85.75vw;
    height: 71vh;
    padding: 3vh 4vw;
  }

  #title{
    text-align: center;
    font: 500 40px/54px "Avenir";
    color: #4d4d4d;
    letter-spacing: 1px;
  }

  #form-area{
    padding-top: 3vh;
  }

  #right-form{
    padding-left: 3vw;
  }

  .form-item{
    margin-bottom: 3vh;
  }

  .form-word{
    color: #4d4d4d;
    font: 500 23px/30px "PingFang SC";
  }

  .question{
    display: block;
    margin-bottom: 9px;
  }

  #time-pick{
    margin-top: 7px;
  }

  .time-item{
    display: block;
    font: 400 23px/36px "PingFang SC";
    color: #4d4d4d;
  }

  #file-name{
    padding: 0 10px;
    border-radius: 4px 0 0 4px;
    background-color: rgba(216, 216, 216, 0.5);
    box-shadow: 1px 1px 1px 1px #D1CDCD;
    font: 400 23px/30px "PingFang SC";
    color: #4d4d4d;
  }
  #file {
    background: rgba(77, 77, 77, 0.8);
    box-shadow: 1px 1px 1px 1px rgb(68, 68, 68);
    border-radius: 0 4px 4px 0;
    font: 400 20px/30px "PingFang SC";
    color: #fff;
    line-height: 30px;
    text-align: center;
  }
  #file input {
    position: absolute;
    font-size: 30px;
    right: 0px;
    top: 0;
    opacity: 0;
    cursor: pointer;
  }

  .button{
    height: 55px;
    margin-top: 3.5vh;
    text-align: center;
    border-radius: 5px;
    background-color: rgba(77, 77, 77, 0.8);
    font: 400 24px/55px 'PingFang SC';
    color: #fff;
  }

  input[type="text"]{
    background-color: rgba(0, 0, 0, 0);
    border-width: 0;
    font: 400 23px/30px "PingFang SC";
    color: #4d4d4d;
    outline: none;
  }

  textarea{
    height: 18vh;
    border-radius: 5px;
    background-color: rgba(216, 216, 216, 0.5);
    box-shadow: 1px 1px 1px 1px #D1CDCD;
    font: 400 23px/30px "PingFang SC";
    color: #4d4d4d;
    outline: none;
  }

  hr{
    margin-top: -1px;
    border: 1px solid #979797;
    box-shadow: 1px 1px 2px 2px rgba(203, 200, 200, 50);
  }

  @media (max-width: 1380px) {
    #title{
      font: 500 36px/49px "Avenir";
    }

    .form-word{
      font: 500 20px/28px "PingFang SC";
    }

    .time-item{
      font: 400 20px/28px "PingFang SC";
    }

    #file{
      font: 400 18px/28px "PingFang SC";
    }

    #file-name{
      font: 400 20px/28px "PingFang SC";
    }

    .button{
      margin-top: 4.8vh;
      height: 45px;
      font: 400 20px/45px 'PingFang SC';
    }

    input[type="text"]{
      font: 400 20px/28px "PingFang SC";
    }

    textarea{
      font: 400 20px/28px "PingFang SC";
      height: 15vh;
    }
  }
</style>
