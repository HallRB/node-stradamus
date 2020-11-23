var fs = require("fs");
var lego = "I have grown beyond my original program";
var ssj = "This isn't even my final form";

fs.appendFile("itsalive.text", lego + "\n", function(err) {

    if (err) {
        return console.log(err);
    }
        console.log("Level Up!")
});

fs.appendFile("itsalive.text", ssj + "\n", function(err) {

    if (err) {
        return console.log(err);
    }
        console.log("kamehameha!")
});

// action taken

// PS C:\Users\Richard\Desktop\Code_Repo\node-stradamus> node lego
// Level Up!
// PS C:\Users\Richard\Desktop\Code_Repo\node-stradamus> node lego
// undefined
// Level Up!
// PS C:\Users\Richard\Desktop\Code_Repo\node-stradamus> node lego
// undefined
// Level Up!
// PS C:\Users\Richard\Desktop\Code_Repo\node-stradamus> node lego
// Level Up!
// PS C:\Users\Richard\Desktop\Code_Repo\node-stradamus> node lego
// Level Up!
// kamehameha!