var bodyparser = require('body-parser');
var fs = require('fs');
var express = require('express');
var app = express();
// var mongoose = require('mongoose');
// mongoose.connect('mongodb://localhost:27017/shopping',{useNewUrlParser:true},(err) => {
// if(err) throw err;
// else console.log("Database Connection Successfully Established");
// })
var mongo = require('mongodb');

var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/mydb";

app.use(function (req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Origin,X-Requsted-With,Content-Type,Accept');
    res.header('Access-Control-Allow-Methods', 'OPTIONS,GET,PUT,POST,DELETE');
    if('OPTIONS'== req.method) {
        res.sendStatus(200);
    } else {
        // console.log('${req.ip} ${req.method} ${req.url}')
    
    next();
    }
});

app.use(express.json());
// app.use('/',routes);
app.get('/',function (req,res){res.send([{message:"get"}]);
});
app.get('/',function (req,res){res.send([{message:"get"}]);
});

app.post('/login-sign-up/login',function (req,res,next) {
    console.log(req.body);
    console.log("Hello1");
    var tr = req.body;

    MongoClient.connect(url,{ useNewUrlParser: true }, function(err, db) {

            if (err) throw err;

            var dbo = db.db("mydb");
            //var myobj = { name: "Company Inc", address: "Highway 37" };
            var query = { name:req.body.name, pass:req.body.pass };

            dbo.collection("customers").find(query).toArray(function(err, data) {

              if (err) throw err;
              console.log(req.body);
              console.log("-------------");
              console.log(data.length);

              if(data.length === 0) {
                console.log(false);
                res.send(false);
              } else {
                res.send(true);
              }
            
            //res.send(false);
              db.close();
            });
          });

    //res.send(true);
});
app.post('/login-sign-up/signup',function (req,res) {
    console.log(req.body);
    console.log("Hello");
    var tr = req.body;
    MongoClient.connect(url,{ useNewUrlParser: true }, function(err, db) {
            if (err) throw err;
            var dbo = db.db("mydb");
            //var myobj = { name: "Company Inc", address: "Highway 37" };
            dbo.collection("customers").insertOne(req.body, function(err, res) {
              if (err) throw err;
              console.log("1 document inserted");
              db.close();
            });
          });

    res.send(true)
});
app.post('/cart',function (req,res) {
  console.log(req.body);
  console.log("Hello");
  var tr = req.body;
  MongoClient.connect(url,{ useNewUrlParser: true }, function(err, db) {
          if (err) throw err;
          var dbo = db.db("mydb");
          //var myobj = { name: "Company Inc", address: "Highway 37" };
          dbo.collection("cart").insertOne(req.body, function(err, res) {
            if (err) throw err;
            console.log("1 document inserted");
            db.close();
          });
        });

  res.send(true)
});


app.listen(4201,'127.0.0.1',function (){
  console.log('listening on 4201');});
