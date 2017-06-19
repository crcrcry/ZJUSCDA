var express = require('express');
var router = express.Router();

var Demo = require('../models/demo');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: '林超超' });
});


router.post('/', function (req, res, next) {
    Demo.getUser(req.body.username, req.body.password, function (result) {
        if(result.length == 0){
            res.json({
                code: -1,
                msg: "没找到该用户"
            })
        }else{
            res.json({
                code: 0,
                msg: "找到了" + req.body.username,
                result: result
            })
        }
    })
})

module.exports = router;
