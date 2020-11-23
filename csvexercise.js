var fs = require("fs");

fs.readFile("csvexercise.csv", "utf8", function (error, data) {
    if (error) {
        return console.log("csv error" + error);
    }
    console.log(data);
})

// this will pull the information from the csv file and print it in the terminal

//prints "it is I JoJo"