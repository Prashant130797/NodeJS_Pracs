const expressjs = require('express');
const routes = expressjs.Router();
const alluserclass = require('./RoutesFunction');
routes.post('/enc_data',alluserclass.encrypdataMain);
routes.post('/Login',alluserclass.validateLogin);
routes.post('/Main',alluserclass.getMain);
routes.get('/Getusers_typicode',alluserclass.GetUser); //Called API internally
routes.get('/',  (req, resp) => {
    resp.setHeader("Cache-Control", "no-store");
    try {
        var headers = req.headers;
        // var name = req.query.name;
        // var age = req.query.age;
        // console.log("The name is", name, age);
        resp.status(200).send({"status":200,"Mesage":"Hello bhai sahab sas",data:[],"headers":headers});
    } catch (e) {
        console.log("The error occured");
    }

});

module.exports = routes;