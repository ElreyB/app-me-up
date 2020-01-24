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

const callbackConsole = err => {
  err ? console.error("There was an error", err) : console.log("Success!");
};

inquirer.prompt(questions).then(({ css, javascript, projectName }) => {
  // switch (true) {
  //   case css && javascript:
  //     fs.writeFile(
  //       "index.html",
  //       `${htmlWithStyles(projectName)}${htmlWithScript}`,
  //       callbackConsole
  //     );

  //     fs.writeFile("style.css", "", callbackConsole);

  //     fs.writeFile("script.js", "", callbackConsole);
  //     break;
  //   case javascript:
  //     fs.writeFile(
  //       "index.html",
  //       `${html(projectName)}${htmlWithScript}`,
  //       callbackConsole
  //     );
  //     fs.writeFile("script.js", "", callbackConsole);
  //     break;
  //   case css:
  //     fs.writeFile(
  //       "index.html",
  //       `${htmlWithStyles(projectName)}${htmlEnd}`,
  //       callbackConsole
  //     );

  //     fs.writeFile("style.css", "", callbackConsole);
  //     break;
  //   default:
  //     fs.writeFile(
  //       "index.html",
  //       `${html(projectName)}${htmlEnd}`,
  //       callbackConsole
  //     );
  // }

  if (javascript && css) {
    fs.writeFile(
      "index.html",
      `${htmlWithStyles(projectName)}${htmlWithScript}`,
      callbackConsole
    );

    fs.writeFile("style.css", "", callbackConsole);

    fs.writeFile("script.js", "", callbackConsole);
  } else if (javascript) {
    fs.writeFile(
      "index.html",
      `${html(projectName)}${htmlWithScript}`,
      callbackConsole
    );

    fs.writeFile("script.js", "", callbackConsole);
  } else if (css) {
    fs.writeFile(
      "index.html",
      `${htmlWithStyles(projectName)}${htmlEnd}`,
      callbackConsole
    );

    fs.writeFile("style.css", "", callbackConsole);
  } else {
    fs.writeFile(
      "index.html",
      `${html(projectName)}${htmlEnd}`,
      callbackConsole
    );
  }
});
