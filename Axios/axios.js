const fs = require("fs");
const axios = require("axios");
const inquirer = require("inquirer");

/**
 * Activity 33: "Axios"
 * Goal: Get links to all your GitHub repos, then write them to a file
 * Don't forget to run `npm install` in this folder before running your code!
 */
inquirer
  .prompt({
    message: "Enter your GitHub username",
    name: "username"
  })
  .then(function ({ username }) {
    const queryUrl = `https://api.github.com/users/${username}/repos?per_page=100`;

    axios.get(queryUrl).then(function ({ data }) {
      const repoNames = data.map(function (repo) {
        return repo.name;
      });

      const repoNamesStr = repoNames.join("\n");

      fs.writeFile("repos.txt", repoNamesStr, function (err) {
        if (err) {
          throw err;
        }

        console.log(`Saved ${repoNames.length} repos`);
      });
    });
  });

