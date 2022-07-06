const renderList = (list) => {
  const $conteiner = document.querySelector(
    ".home-pokemon-list__pokemons"
  );

  const total = list.length;
  let contador = 0;

  let cardsList = [];

  let control = true;

  for(let i = 0; i < 9; i++) {
    let val = `<pokemon-card pokemon-number="${list[i]}"></pokemon-card>`
    contador += 1;
    cardsList.push(val)
    if(contador === total) {control = false; break};
  }

  cardsList = cardsList.join("")
  const but = '<button class="home-pokemon-list__button">Ver más</button>'


  const templateHtml = `
  <div class="home-pokemon-list__container">
    ${cardsList}
  </div>
  
  ${(control) ?but :""}
    `;

  $conteiner.innerHTML = templateHtml;

  ////

  if(control === false) {return}

  const $button = document.querySelector(
    ".home-pokemon-list__button"
  );
  const $containerList = document.querySelector(
    ".home-pokemon-list__container"
  );


  
  $button.addEventListener("click", (e) => {
    let seconCards = []

    for(let i = 0; i < 9; i++) {
      let val = `<pokemon-card pokemon-number="${list[contador]}"></pokemon-card>`
      contador += 1;
      seconCards.push(val)
      if(contador === total) {
        $button.remove();
        break;
      };
    }

    seconCards = seconCards.join("");
    const tem = document.createElement("template");
    tem.innerHTML = seconCards;
    $containerList.appendChild(tem.content.cloneNode(true))

  })
}

export default renderList