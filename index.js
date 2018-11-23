var express = require('express');
var app = express();
var mongoose = require('mongoose');
var config = require('./config/database.js');
var path = require('path');

mongoose.Promise = global.Promise;
mongoose.connect(config.uri, (err) =>{
    if(err){
        console.log('Could NOT connect to database: ', err);
    }
    else{
        console.log(config.secret);
        console.log('Connected to database: '+ config.db );
    }
});

app.use(express.static(__dirname + '/client/dist/client'));

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname + '/client/dist/client/index.html'));
});

app.listen(8080, () =>{
    console.log('Listening on port 8080');
});