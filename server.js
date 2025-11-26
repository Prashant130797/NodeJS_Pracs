// var colors = require('colors');
// console.log("the string".green);
// serverHttp.createServer((req,resp)=>{
//     resp.write("this is prashant sanadi");
//     resp.end("")
// }).listen(4800);
var exressjs = require("express");
var app = exressjs();
app.use(exressjs.json());
app.use(exressjs.urlencoded());
app.use(exressjs.urlencoded({ extended: true }));
app.use(exressjs.static('public'));
var routes = require('./routesMain.js')
app.use(routes);
app.listen(7869,()=>{
    console.log("The server is running sass");
});

