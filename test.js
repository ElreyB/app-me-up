"use strict";

const queryUrl = `https://api.github.com/users/elreyb/repos?per_page=100`;
fetch(queryUrl)
  .then(res => res.json())
  .then(repos => {
    console.log(repos[0]);
    // const repos = result.data;
    const repoNames = repos.map(repo => repo.name);
    const main = document.querySelector("main");
    console.log(main);
    const ul = document.createElement("ul");
    repoNames.forEach(name => {
      const li = document.createElement("li");
      li.innerText = name;
      ul.append(li);
    });
    main.appendChild(ul);
  });
