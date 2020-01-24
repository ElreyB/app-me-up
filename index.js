"use strict";

const fs = require("fs");
const inquirer = require("inquirer");
const { html, htmlWithScript } = require("./templates/html");

const questions = [
  {
    type: "confirm",
    name: "css",
    message: "Do you want a css file?"
  },
  {
    type: "confirm",
    name: "javascript",
    message: "Do you want a js file?"
  }
];

inquirer.prompt(questions).then(answers => {
  console.log(JSON.stringify(answers, null, 2));
  fs.writeFile(
    "index.html",
    answers.javascript ? htmlWithScript : html,
    err => {
      if (err) console.error(err);
    }
  );
});
