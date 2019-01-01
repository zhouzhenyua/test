/**
 * 开启服务端  mongod --dbpath="："
 * 开启客户端
 * 端口:27017
 *
 */
var express=require('express')
var app=express()

//数据库客户端   相当于打开命令行
var mongoClient=require('mongodb').MongoClient
//数据库地址
var address='MongoDB://localhost:27017'
app.get('/',function  (req,res) {

    res.writeHead(200,{"Content-Type":"textml;charset=UTF-8"})
    mongoClient.connect(address,function  (err,db) {
        //数据库名称
        var dbname=db.db('test')
        dbname.collection('data').insertOne({'usename':'haha'},function(err,result) {
            if (err) {
                res.end('失败')
            }else{
                res.end('成功')
            }
            db.close()
        })
    })
})
app.listen(3000)
