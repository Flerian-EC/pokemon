const $BODY = document.querySelector('div[class="container"]');

let list = [];
for(let i = 1; i <= 898; i++) {
  list.push(`<pokemon-card pokemon-number="${i}"></pokemon-card>`)
}

list = list.join("");
const template = document.createElement("template");
template.innerHTML = list;
$BODY.appendChild(template.content.cloneNode(true))