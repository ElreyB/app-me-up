"use strict";

const fs = require("fs");

const htmlTemplate = projectName => {
  return `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <title>${projectName}</title>
</head>
<body>
`;
};

const htmlTemplateEnd = `
</body>
</html>
`;

const htmlTemplateWithScript = `
    <script src="script.js"></script>
  </body>
</html>
`;

const htmlTemplateWithStyles = projectName => {
  return `
  <!DOCTYPE html>
  <html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <link rel="stylesheet" href="style.css">
    <title>${projectName}</title>
  </head>
  <body>
  `;
};

module.exports = {
  htmlTemplate,
  htmlTemplateEnd,
  htmlTemplateWithScript,
  htmlTemplateWithStyles
};
