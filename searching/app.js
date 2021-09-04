const express = require ('express');
const app = express();
const mongoose = require('mongoose');
const User = require('./users.js');
var bodyParser = require('body-parser')
var jsonParser =bodyParser.json();

mongoose.connect('mongodb+srv://debarishi:1234@cluster0.ttodf.mongodb.net/practice?retryWrites=true&w=majority',
{
    useNewUrlParser: true,
    useUnifiedTopology: true,   
}
);
app.get('/users', function (req,res){
    User.find().select('email').then((data) => {
        res.status (201).json(data)
    })
}
)

app.post('/users', jsonParser, function (req, res) {

    const data = new User({

        _id: new Mongoose.Types.ObjectId(),
        name: req.body.name,
        email: req.body.email,
        address: req.body.address
    })
    data.save().then((result) => {
        res.status(201).json(result)

    })
    .catch((error) => console.warn(error)
    ) 
})
app.delete("/user/:id", jsonParser, function(req,res) {
    User.updateOne(
        { _id: req.params.id },
            {
                set: {
                    name: req.body.name,
                    email: req.body.email,
                    address: req.body.address,
                }
            }
    ).then((result) => {

        res.status(200).json(result)
    }).catch ((err) => {console.warn(err) })
    
})

app.get("/search/:name", function(req , res){
    var regex = new RegExp(req.params.name,'i');

    User.find({name:regex}).then(()=> {
        res.status(200).json(result)
    })
})
app.listen(4700)
