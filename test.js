"use strict";

// document.querySelector("body").style.backgroundImage =
//   "url('https://cdn.hipwallpaper.com/i/52/25/YHV2NW.jpg')";

const addAttributes = (element, attrsObject) => {
  Object.entries(attrsObject).forEach(([attr, value]) =>
    element.setAttribute(attr, value)
  );
};

let repoList = [];

const card = ({ avatar_url, login, url }) => {
  const div = document.createElement("div");
  div.classList.add("text-center");
  div.innerHTML = `
  <div class="card w-25 mx-auto">
    <img src="${avatar_url}" class="card-img-top" alt="github image">
    <div class="card-body text-center">
    <a href="${url}" target="_blank" rel="noopener noreferrer">
      <h5 class="card-title">${login}</h5>
    </a>
    <button class="btn btn-primary">Go somewhere</button>
    </div>
  </div>
`;

  return div;
};

const queryUrl = `https://api.github.com/users/elreyb/repos?per_page=100`;
fetch(queryUrl)
  .then(res => res.json())
  .then(repos => {
    repoList = repos;
    console.log(repos);
    const main = document.querySelector("main");
    const owner = repos[0].owner;
    const imgEl = card(owner);

    main.prepend(imgEl);

    const section = document.querySelector("section");
    const ul = document.createElement("ul");

    addAttributes(ul, {
      class: "d-flex justify-content-around flex-wrap",
      style: "list-style-type: none"
    });

    repoList.forEach(({ name, html_url }) => {
      const li = document.createElement("li");
      const button = document.createElement("a");

      button.innerText = name;

      addAttributes(button, {
        href: html_url,
        class: "btn btn-info",
        target: "_blank",
        rel: "noopener noreferrer"
      });
      addAttributes(li, { class: "my-3" });

      li.appendChild(button);
      ul.append(li);
    });

    section.appendChild(ul);
  });
