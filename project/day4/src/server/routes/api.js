const express = require('express');
const router = express.Router();
const MongoClient = require('mongodb').MongoClient;
const ObjectId = require('mongodb'.ObjectId);


//connect
const connection = (closure) => {
    return MongoClient.connect('mongodb://localhost:27017/ShoppingCart', (err, db) => {
        if(err) return console.log(err);

        closure(db);
    });

};