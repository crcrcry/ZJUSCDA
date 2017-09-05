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
            <span class="form-word">面试时间: </span>
            <input type="text" v-model="form.time" style="width: 10.2vw">
            <hr style="width: 200px; margin-left: 5.3vw">
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
        submitForbidden: false,
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
        // setTimeout 会改变 this 指向，防止重复构造该函数。
        window.submitRecover = (!window.submitRecover) ? () => {
          this.submitForbidden = false;
          this.$message({
            message: '状态恢复，可重新提交表单！',
            type: 'success',
            showClose: true,
            duration: 0,
          });
        } : window.submitRecover;

        // 判断一些数据是否齐全
        if(!this.form.ifFile){
          this.$message({
            message: '尚未选择要上传的个人简历！',
            type: 'warning'
          });
          return ;
        }
        if(!this.form.time){
          this.$message({
            message: '尚未选择面试时间！',
            type: 'warning'
          });
          return ;
        }

        // 判断是否频繁提交
        if(this.submitForbidden){
          this.$message({
            message: '禁止过于频繁的提交表单，请2分钟后在进行尝试！',
            type: 'warning',
            duration: 5500,
          });
          return ;
        }

        // 去除 q1 q2 中的回车，防止 excel bug
        this.form.q1 = this.form.q1.replace(/\n/g, ' ');
        this.form.q2 = this.form.q2.replace(/\n/g, ' ');

        // 思路：通过 FormData 手动添加元素并上传
        var form = new FormData();

        for(const key in this.form){
          form.append(key, this.form[key]);
        }

        const file = document.getElementById('resume');
        console.log('文件大小：'+file.files[0].size/(1000*1000)+' MB');
        const maxFileSize = 1000 * 1000 * 10;  // 10 mb 文件够用了吧
        if(file.files[0].size > maxFileSize){
          this.$message({
            message: '简历文件大小不应超过 10 MB！',
            type: 'warning',
          });
          return ;
        }
        form.append("resume", file.files[0]);

        const req = new Request('http://115.159.152.163:3000/join', {
          method: "POST",
          body: form,
        });

        // 上传加载函数
        this.openFullScreen();

        // ajax
        fetch(req)
          .then(res => {
            this.loading = false;
            return res.json();
          })
          .then(data => {
            if(data.code === 1){
              // this.resetForm();  别清除 免得填错用户体验不好
              this.$message({
                message: data.msg,
                type: 'success',
                duration: 5000,
              });

              // 提交成功，防止高频点击，两分钟一次
              this.submitForbidden = true;
              // submitRecover();
              setTimeout("submitRecover()", 120000);  
            }else{
              this.$message({
                message: data.msg,
                type: 'error',
                duration: 5000,
              });
            }
          })
          .catch(err => {
            console.log(err);
            this.loading = false;
            this.$message({
              message: 'Error: ' + err,
              type: 'error',
              duration: 5000,
            });
          });
      },

      openFullScreen() {
        this.loading = true;
      }
    },

    mounted() {
      // 是否禁用表单
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
    margin-bottom: 2.4vh;
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

  input{
    cursor: pointer;
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
    height: 18.5vh;
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

  @media (min-width: 1381px) and (max-width: 1700px) {
    .form-word{
      font: 500 19px/24px "PingFang SC";
    }

    .time-item{
      font: 400 19px/24px "PingFang SC";
    }

    #file{
      font: 400 19px/28px "PingFang SC";
    }

    #file-name{
      font: 400 20px/28px "PingFang SC";
    }

    input[type="text"]{
      font: 400 19px/24px "PingFang SC";
    }

    textarea{
      font: 400 18px/24px "PingFang SC";
      height: 16.7vh;
    }
  }

  @media (max-width: 1380px) {
    #title{
      font: 500 36px/49px "Avenir";
    }

    .form-word{
      font: 500 18px/24px "PingFang SC";
    }

    .time-item{
      font: 400 18px/24px "PingFang SC";
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
      font: 400 18px/24px "PingFang SC";
    }

    textarea{
      font: 400 18px/24px "PingFang SC";
      height: 13vh;
    }
  }
</style>
