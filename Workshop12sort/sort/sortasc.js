var http = require('http');  
var MongoClient = require('mongodb').MongoClient;  
var url = "mongodb://localhost:27017/ MongoDatabase";  
MongoClient.connect(url, function(err, db) {  
if (err) throw err;  
var mysort = { name: 1 };  
db.collection("employees").find().sort(mysort).toArray(function(err, result) {  
if (err) throw err;  
console.log(result);  
db.close();  
});  
});  