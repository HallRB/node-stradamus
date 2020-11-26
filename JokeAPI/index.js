const fs = require("fs");
const util = require("util");
const axios = require("axios");

const appendFileAsync = util.promisify(fs.appendFile);
const readFileAsync = util.promisify(fs.readFile);

const config = { headers: { accept: "application/json" } };

/**
 * Activity 35: "Joke Saver"
 * Goal: Make an API request to get a new joke, then add it to a local file
 * Don't forget to run `npm install` in this folder before running your code!
 */

// Make API call to `icanhazdadjoke.com`
axios
  .get("https://icanhazdadjoke.com/", config)
  .then(function (res) {
    console.log(res.data);
    console.log(res.data.joke)
    // Your code here!
    // 1. Get the `joke` property from the response data
theJoke = res.data.joke;

    // 2. Use the `appendFileAsync` function to append the joke to a file named `jokes.txt`
appendFileAsync("jokes.txt", theJoke + "\n").then(function () {console.log("you have created and appended file: Joke")})
.catch(err => {
  throw err;
});

    // 3. _After_ appending the joke, read the `jokes.txt` file and print all its content to the console
    //    HINT: Don't forget about async and the order in which code is run!
  });
