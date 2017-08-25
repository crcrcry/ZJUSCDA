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
              <input type="text" v-model="form.name" style="width: 9.2vw">
              <hr class="left-hr">
            </el-row>
            <el-row class="form-item">
              <span class="form-word">学号: </span>
              <input type="text" v-model="form.id" style="width: 9.2vw">
              <hr class="left-hr">
            </el-row>
            <el-row class="form-item">
              <span class="form-word">校区: </span>
              <input type="text" v-model="form.campus" style="width: 9.2vw">
              <hr class="left-hr">
            </el-row>
            <el-row class="form-item">
              <span class="form-word">推荐人: </span>
              <input type="text" v-model="form.referee" style="width: 7.5vw">
              <hr class="left-hr">
            </el-row>
            <el-row class="form-item">
              <span class="form-word">是否服从调剂: </span>
              <input type="text" v-model="form.ifAdjust" style="width: 2vw">
              <hr class="left-hr">
            </el-row>
          </el-col>
          <el-col :span="13" :offset="2">
            <el-row class="form-item">
              <span class="form-word">专业: </span>
              <input type="text" v-model="form.major" style="width: 7.4vw">
              <span class="form-word">&nbsp;年级: </span>
              <input type="text" v-model="form.grade" style="width: 4.5vw">
              <hr>
            </el-row>
            <el-row class="form-item">
              <span class="form-word">长号: </span>
              <input type="text" v-model="form.longTel" style="width: 7.4vw">
              <span class="form-word">&nbsp;短号: </span>
              <input type="text" v-model="form.shortTel" style="width: 4.5vw">
              <hr>
            </el-row>
            <el-row class="form-item">
              <span class="form-word">邮箱: </span>
              <input type="text" v-model="form.email" style="width: 17vw">
              <hr>
            </el-row>
            <el-row class="form-item">
              <span class="form-word">第一志愿: </span>
              <input type="text" v-model="form.first" style="width: 14vw">
              <hr>
            </el-row>
            <el-row class="form-item">
              <span class="form-word">第二志愿: </span>
              <input type="text" v-model="form.second" style="width: 14vw">
              <hr>
            </el-row>
          </el-col>
        </el-row>
        <el-row class="form-item">
          <span class="form-word question">{{ formInfo.q1 }}</span>
          <textarea v-model="form.q1" style="width: 41vw;"></textarea>
        </el-row>
      </el-col>

      <el-col :span="12" id="right-form">
        <el-row class="form-item">
          <span class="form-word question">{{ formInfo.q2}}</span>
          <textarea v-model="form.q2" style="width: 39vw;"></textarea>
        </el-row>
        <el-row class="form-item">
          <el-row class="form-item">
            <span class="form-word">面试时间选择: </span>
            <input type="text" v-model="form.time" style="width: 10.2vw">
            <el-row id="time-pick">
              <el-col :span="7">
                <span class="time-item">{{ formInfo.time[0] }}</span>
                <span class="time-item">{{ formInfo.time[1] }}</span>
              </el-col>
              <el-col :span="7" :offset="1">
                <span class="time-item">{{ formInfo.time[2] }}</span>
                <span class="time-item">{{ formInfo.time[3] }}</span>
              </el-col>
              <el-col :span="7" :offset="1">
                <span class="time-item">{{ formInfo.time[4] }}</span>
                <span class="time-item">{{ formInfo.time[5] }}</span>
              </el-col>
            </el-row>
          </el-row>
        </el-row>
        <el-row class="form-item">
          <el-col :span="5" class="form-word">简历提交: </el-col>
          <el-col :span="13" id="file-name">{{ form.fileName }}</el-col>
          <el-col :span="5" id="file">
            选择文件
            <input type="file" @change="changeFile($event)" id="resume">
          </el-col>
        </el-row>
        <el-row class="form-item">
          <el-col :span="5" :offset="12" class="button"><div @click="resetForm">重置</div></el-col>
          <el-col :span="5" :offset="2" class="button"><div @click="submitForm" v-loading.fullscreen.lock="loading">提交</div></el-col>
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
          major: '',
          grade: '',
          id: '',
          longTel: '',
          shortTel: '',
          campus: '',
          email: '',
          referee: '',
          ifAdjust: '',
          first: '',
          second: '',
          q1: '',
          q2: '',
          time: '',
          ifFile: false,
          fileName: '尚未选择简历文件',
        },
        loading: false,
      };
    },
    computed: {
      formInfo() {
        return { ...this.$store.state.join.formInfo }
      },
    },
    props: {
      ifStart: {
        type: Boolean,
        required: true,
      }
    },
    methods: {
      changeFile(event) {
        const nowFileName = event.target.value;
        if (nowFileName === '') {
          this.form.ifFile = false;
          this.form.fileName = '请选择您的简历文件';
        } else {
          this.form.ifFile = true;
          this.form.fileName = nowFileName.substring(12);
        }
      },

      resetForm() {
        for(let item in this.form){
          if(item === 'fileName'){
            this.form[item] = '尚未选择简历文件';
          }else{
            this.form[item] = '';
          }
        }
      },

      submitForm() {
        if(!this.form.ifFile){
          this.$message({
            message: '尚未选择要上传的个人简历！',
            type: 'warning'
          });
          return ;
        }

        // 思路：通过 FormData 手动添加元素并上传
        var form = new FormData();

        for(const key in this.form){
          form.append(key, this.form[key]);
        }

        const file = document.getElementById('resume');
        const maxFileSize = 1024 * 1024 * 10;  // 10 mb 文件够用了吧
        if(file.files[0].size > maxFileSize){
          this.$message({
            message: '简历文件大小不应超过 10 MB！',
            type: 'warning',
          });
          return ;
        }
        form.append("resume", file.files[0]);

        const req = new Request('http://localhost:3000/join', {
          method: "POST",
          body: form,
        });

        // 上传加载函数
        this.openFullScreen();

        // ajax
        fetch(req)
          .then(res => {
            this.loading = false
            return res.json();
          })
          .then(data => {
            if(data.code === 1){
              this.$message({
                message: data.msg,
                type: 'success',
                duration: 5000,
              });
            }else{
              this.$message({
                message: data.msg,
                type: 'error',
                duration: 5000,
              });
            }
          })
          .catch(err => {
            this.$message({
              message: err,
              type: 'error',
              duration: 5000,
            });
          })
        this.resetForm();
      },

      openFullScreen() {
        this.loading = true;
      }
    },

    mounted() {
      if(!this.ifStart){
        const inputArr = document.getElementsByTagName('input');
        const textArr = document.getElementsByTagName('textarea');
        for(let item of inputArr){
          item.disabled = 'disabled';
        }
        for(let item of textArr){
          item.disabled = 'disabled';
        }
      }
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
    cursor: pointer;
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
