"use strict";

const fs = require("fs");
const inquirer = require("inquirer");
const {
  html,
  htmlWithScript,
  htmlEnd,
  htmlWithStyles
} = require("./templates/html");

const questions = [
  {
    type: "input",
    name: "project",
    message: "What is the name of your project?"
  },
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

inquirer.prompt(questions).then(({ css, javascript }) => {
  if (!css && !javascript) {
    return fs.writeFile("index.html", `${html}${htmlEnd}`, err => {
      if (err) console.error(err);
    });
  }

  if (javascript && css) {
    fs.writeFile("index.html", `${htmlWithStyles}${htmlWithScript}`, err => {
      if (err) console.error(err);
    });

    fs.writeFile("style.css", "", err => {
      if (err) console.error(err);
    });

    fs.writeFile("script.js", "", err => {
      if (err) console.error(err);
    });
    return;
  }

  if (javascript) {
    fs.writeFile("index.html", `${html}${htmlWithScript}`, err => {
      if (err) console.error(err);
    });
    fs.writeFile("script.js", "", err => {
      if (err) console.error(err);
    });
    return;
  }

  if (css) {
    fs.writeFile("index.html", `${htmlWithStyles}${htmlEnd}`, err => {
      if (err) console.error(err);
    });

    fs.writeFile("style.css", "", err => {
      if (err) console.error(err);
    });
    return;
  }
});
