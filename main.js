
var fs = require('fs');
var os = require('os');
var democlass = require("./democlass");
fs.writeFileSync("maindocs.txt", "my name is prsahant updated after some time ");
var democlassed = new democlass("lolipop", "tripura");
democlassed.funcsss();

function tripura() {
    console.log(os.platform());
    console.log(os.hostname());
    console.log(os.cpus());
    console.log("hii node js");
    var objdemo = {
        "name": "prshan",
        "surnames": "Saanadi"
    }

    const { name, surnames } = objdemo;
    function myname() {
        console.log("my name is prashant " + surnames);
    }
    myname();
}

tripura();