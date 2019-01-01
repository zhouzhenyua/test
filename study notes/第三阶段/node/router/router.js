// router  路由



function showIndex(req,res){
    res.writeHead(200,{"Content-type":"text/html;charset=utf-8"});

    res.end("这是首页")

}

function showStudent(req,res){
    res.writeHead(200,{"Content-type":"text/html;charset=utf-8"});

    res.end("这是学生页")

}

function show404(req,res){
    res.writeHead(404,{"Content-type":"text/html;charset=utf-8"});

    res.end("这是404页面")

}

exports.showIndex=showIndex;
exports.showStudent=showStudent;
exports.show404=show404;

