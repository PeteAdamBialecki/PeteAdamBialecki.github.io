'use strict';

var express = require("express");
var app = express();

app.use(function(req, res, next) {
    req.myMessage = "Hey there #2...";
    next();
});

app.use(function(req, res, next) {
    console.log(req.myMessage);
    next();
});

var port = process.env.PORT || 3000;

app.listen(port, function(){
	console.log("Express server is listening on port", port);
});









// var routes = require("./routes");

// var jsonParser = require("body-parser").json;
// var logger = require("morgan");

// app.use(logger("dev"));
// app.use(jsonParser());

// app.use("/questions", routes);

// // catch 404 and forward to error handler
// app.use(function(req, res, next){
// 	var err = new Error("Not Found");
// 	err.status = 404;
// 	next(err);
// });

// // Error Handler

// app.use(function(err, req, res, next){
// 	res.status(err.status || 500);
// 	res.json({
// 		error: {
// 			message: err.message
// 		}
// 	});
// });

// var port = process.env.PORT || 3000;

// app.listen(port, function(){
// 	console.log("Express server is listening on port", port);
// });