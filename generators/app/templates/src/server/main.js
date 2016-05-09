"use strict";
var express = require('express');
var parser = require('body-parser');
var pjson = require('../../package.json');
var app = express();
var clientDir = __dirname + '/../static';
var buildDir = __dirname + '/../../build';
var bootstrapCssDir = __dirname + '/../../node_modules/bootstrap/dist/css';
/* MiddleWare */
var logger = function (req, res, next) {
    console.log("---------------------------------------------");
    console.log("REQ:" + req.url);
    next();
};
app.use(express.static(clientDir))
    .use('/build', express.static(buildDir))
    .use('/bs-css', express.static(bootstrapCssDir))
    .listen(process.env.port || 7777);
app.use(logger);
app.use(parser.json());
app.use(parser.urlencoded({ extended: false }));
//Error Handler
var errorHandler = function (err, req, res, next) {
    console.log("ERROR!!!!");
    res.status(500);
    res.send(err);
};
app.use(errorHandler);
console.log(pjson.name + " v" + pjson.version + " server started! - proxy:" + process.env.HTTP_PROXY);
//# sourceMappingURL=main.js.map