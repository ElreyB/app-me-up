#!/usr/bin/env node
"use strict";

const fs = require("fs");
const path = require("path");
const inquirer = require("inquirer");
const { openInBrowser } = require("./openInBrowser");

const {
  htmlFile,
  htmlCssFiles,
  htmlJsFiles,
  htmlCssJsFiles
} = require("./utils");

const github = process.argv.slice(2)[0];

const githubQuestion = [
  {
    type: "input",
    name: "name",
    message: "What is your github username?"
  }
];

const questions = [
  {
    type: "input",
    name: "projectName",
    message: "What is the name of your project?",
    default: "Document"
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

inquirer
  .prompt(github ? githubQuestion : questions)
  .then(({ css, javascript, projectName, name }) => {
    // switch (true) {
    //   case css && javascript:
    //     htmlCssJsFiles(projectName);
    //     break;
    //   case javascript:
    //     htmlJsFiles(projectName);
    //     break;
    //   case css:
    //     htmlCssFiles(projectName);
    //     break;
    //   default:
    //     htmlFile(projectName);
    // }

    if (name) return console.log(name);

    if (javascript && css) {
      htmlCssJsFiles(projectName);
    } else if (javascript) {
      htmlJsFiles(projectName);
    } else if (css) {
      htmlCssFiles(projectName);
    } else {
      htmlFile(projectName);
    }
    openInBrowser(["index.html"], console.log.bind(console));
  });
