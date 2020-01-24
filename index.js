"use strict";

const fs = require("fs");
const inquirer = require("inquirer");

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

inquirer
  .prompt(questions)
  .then(answers => console.log(JSON.stringify(answers, null, 2)));
