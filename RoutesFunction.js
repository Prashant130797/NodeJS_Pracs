

const jwt = require("jsonwebtoken");
const axios = require("axios");

const { encryptAES, decryptAES } = require('./Encryption_Utils.js');
const e = require("express");



class AllRoutesFunction {

    encrypdataMain(req, resp) {
        console.log("The enc ===>>>>");
        try {
            const jsonBody = {
                "address": "Wadala east",
                "native": "NAGANUR",
                "Survey Number": 78964758
            };
            const jsonEncode = JSON.stringify(jsonBody);
            var encData = encryptAES(jsonEncode);
            var decData = decryptAES(encData.data,encData.iv);
            console.log("THE ENC DATA", decData);

            resp.status(200).send({ "body": encData });
        } catch (E) {
            console.log("the exception ", E);
        }
    }

    async GetUser(req, res) {
        console.log("INSIDE===>>>");
        try {
            const response = await axios.get("https://jsonplaceholder.typicode.com/users");
            res.status(200).json({
                message: "Success",
                data: response.data
            });

        } catch (error) {
            res.status(500).json({
                message: "API Error",
                error: error.message
            });
        }
    };

    validateLogin(req, resp) {

        console.log("Inside the func",);

        const jsonBody = {
            "address": "Wadala east",
            "native": "NAGANUR",
            "Survey Number": 78964758
        }
        try {
            const { name, age } = req.body;
            const { requestid } = req.headers;
            console.log("the request id ", requestid);
            console.log("the ===>", name.toLowerCase());
            if ((name == "Prashant".toLowerCase()) && age > 18) {
                resp.set({
                    "X-Powered-By": "Express Custom Server",
                    "Content-Type": "application/json",
                    "Custom-Header": "OmkarApp",
                    "requestID": requestid

                });



                resp.status(200).send({ "status": 200, "Message": "Verified", "Body": JSON.stringify(jsonBody) });
            } else {
                resp.status(201).send({ "status": 201, "Message": "User Not Verified" });
            }
            // resp.send(JSON.stringify({"body":reqMain}));

        } catch (error) {
            console.log("he erer ", error);
            resp.status(500).send({ "status": 500, "Message": error });
        }
    };

    getMain(req, resp) {
        console.log("the req is sdsa");
        resp.send({ "Mesaga": "Error" })
    }
}

module.exports = new AllRoutesFunction();