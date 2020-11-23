var fs = require("fs");

fs.writeFile("itsalive.text", process.argv[2], function(err) {

    if (err) {
        return console.log(err);
    }
        console.log("It's alive...It's ALIIIIIVE")
});