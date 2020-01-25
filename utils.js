const fs = require("fs");
const path = require("path");
const {
  htmlTemplate,
  htmlTemplateWithScript,
  htmlTemplateEnd,
  htmlTemplateWithStyles
} = require("./templates/html");

const callbackConsole = err => {
  err
    ? console.error("There was an error", err)
    : console.log("Success created file(s)!");
};

const htmlFile = projectName => {
  fs.writeFile(
    path.join(__dirname, "index.html"),
    `${htmlTemplate(projectName)}${htmlTemplateEnd}`,
    callbackConsole
  );
};

const htmlCssFiles = projectName => {
  fs.writeFile(
    "index.html",
    `${htmlTemplateWithStyles(projectName)}${htmlTemplateEnd}`,
    callbackConsole
  );
  fs.writeFile("style.css", "", callbackConsole);
};

const htmlJsFiles = projectName => {
  fs.writeFile(
    "index.html",
    `${htmlTemplate(projectName)}${htmlTemplateWithScript}`,
    callbackConsole
  );

  fs.writeFile("script.js", "", callbackConsole);
};

const htmlCssJsFiles = projectName => {
  fs.writeFile(
    "index.html",
    `${htmlTemplateWithStyles(projectName)}${htmlTemplateWithScript}`,
    callbackConsole
  );

  fs.writeFile("style.css", "", callbackConsole);

  fs.writeFile("script.js", "", callbackConsole);
};

module.exports = {
  htmlFile,
  htmlCssFiles,
  htmlJsFiles,
  htmlCssJsFiles
};