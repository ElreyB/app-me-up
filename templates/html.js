const html = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <title>Document</title>
</head>
<body>
`;

const htmlEnd = `
</body>
</html>
`;

const htmlWithScript = `
    <script src="script.js"></script>
  </body>
</html>
`;

const htmlWithStyles = `<!DOCTYPE html>
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <link rel="stylesheet" href="style.css">
  <title>Document</title>
</head>
<body>
`;

module.exports = {
  html,
  htmlEnd,
  htmlWithScript,
  htmlWithStyles
};
