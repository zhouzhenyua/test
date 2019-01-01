

var express = require('express');
var app = express();
//console.log(express);
// router 路由    编写接口  作用：跳转页面的使用
var router = express.Router();
app.use(router);
router.get('/',function(req,res){
   res.send("see")
});

app.listen(3000);
