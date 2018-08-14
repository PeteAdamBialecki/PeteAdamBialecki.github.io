'use strict';

var express = require('express');
var app = express();

app.use(function(req, res, next){
    console.log('The leaves on the tree are', req.query.color);
    next();
});

var port = process.env.PORT || 3000;

app.listen(port, function(){
    console.log('Express server for the REST API is running on port 3000.');
});