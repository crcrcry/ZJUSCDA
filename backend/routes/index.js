var express = require('express');
var multer = require('multer');
var moment = require('moment');
var fs = require('fs');
var iconv = require('iconv-lite');
var MongoDB = require('../models/index');
var router = express.Router();

var storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'static/resumes')
  },
  filename: function (req, file, cb) {
    const filetype = file.originalname.substring(file.originalname.lastIndexOf('.'))
    // 同名文件会自动替换
    cb(null, `${req.body.name}_${req.body.first}_${req.body.second}${filetype}`);
  }
});

var upload = multer({ storage: storage });

/* GET home page. */
router.get('/', function (req, res, nest) {
  res.json({
    msg: 'This is home page'
  });
});

router.post('/join',  upload.any(), function(req, res, next) {
  try{
    const dbPromise = new Promise((resolve, reject) => {
      MongoDB.add(req.body, function (result) {
        if(result){
          resolve({
            code: 1,
            msg: '信息已存入数据库'
          });
        }else{
          reject({
            code: 0,
            msg: '信息存入数据库失败'
          });
        }
      });
    });

    const filePromise = new Promise((resolve, reject) => {
      const form = req.body;
      const csvStrGBK = `\n${form.name},${form.major},${form.grade},${form.id},${form.tel},${form.sex},${form.campus},${form.email},${form.referee},${form.first},${form.second},${form.ifAdjust},${form.q1},${form.q2},${form.time},${form.fileName}`;
      const csvStrUTF = iconv.encode(csvStrGBK, 'gbk');
      fs.appendFile('static/list.csv', csvStrUTF, function(err){
        if(err)
          reject({
            code: 0,
            msg: '信息存入 EXCEL 失败'
          });
        else
          resolve({
            code: 1,
            msg: '信息已存入 EXCEL'
          });
      });
    });

    const pArr = Promise.all([dbPromise, filePromise])
      .then(result => {
        res.json({
          code: 1,
          msg: '信息已同时存入数据库与Excel，报名成功。若要修改信息可查看小提示。'
        })
      })
      .catch(err => {
        res.json(err);
      });
  }catch (e){
    console.log(e);
    res.json({
      code: 0,
      msg: '数据信息上传失败：' + e,
    })
  }
});

module.exports = router;
