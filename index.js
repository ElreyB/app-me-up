#!/usr/bin/env node
"use strict";

const { prompt } = require("inquirer");
const { openInBrowser } = require("./openInBrowser");
const { githubQuestion, questions } = require("./questions");

const {
  htmlFile,
  htmlCssFiles,
  htmlJsFiles,
  htmlCssJsFiles,
  ghRepoFiles
} = require("./fileWriters");

const github = process.argv.slice(2)[0];

if (github && github !== "github") {
  throw `Did not recognize: ${github}`;
}

prompt(github ? githubQuestion : questions).then(
  ({ css, javascript, projectName, name }) => {
    switch (true) {
      case name:
        ghRepoFiles(name);
        break;
      case css && javascript:
        htmlCssJsFiles(projectName);
        break;
      case javascript:
        htmlJsFiles(projectName);
        break;
      case css:
        htmlCssFiles(projectName);
        break;
      default:
        htmlFile(projectName);
    }

    openInBrowser(["index.html"], console.log.bind(console));
  }
);
