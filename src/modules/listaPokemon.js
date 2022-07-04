const peticion = async(API) => {
  const response = await fetch(API);
  const data = await response.json();
  return data;
}

const renderListPokemon = async() => {
  const $conteiner = document.querySelector(
    ".home-pokemon-list__pokemons"
  );

  const templateHtml = `
<div class="home-pokemon-list__container">
  <pokemon-card pokemon-number="1"></pokemon-card>
  <pokemon-card pokemon-number="2"></pokemon-card>
  <pokemon-card pokemon-number="3"></pokemon-card>
  <pokemon-card pokemon-number="4"></pokemon-card>
  <pokemon-card pokemon-number="5"></pokemon-card>
  <pokemon-card pokemon-number="6"></pokemon-card>
  <pokemon-card pokemon-number="7"></pokemon-card>
  <pokemon-card pokemon-number="8"></pokemon-card>
  <pokemon-card pokemon-number="9"></pokemon-card>
</div>

<button class="home-pokemon-list__button">Ver más</button>
  `;

  $conteiner.innerHTML = templateHtml;

  //////
  
  let limit = await peticion("https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0");
  limit = limit.count;
  const firstStop = 898;


  const $button = document.querySelector(
    ".home-pokemon-list__button"
  );
  const $containerList = document.querySelector(
    ".home-pokemon-list__container"
  );


  let contador = 8;
  let control = 10;
  $button.addEventListener("click", () => {


    let str = "";
    for(let i = 0; i < 9; i++) {
      if(contador === limit) {
        $button.remove();
        break;
      }else if(control === firstStop) {
        control = 10001;
      }
      
      str = str + `<pokemon-card pokemon-number="${control}"></pokemon-card>`
      control += 1;
      contador += 1;
    }

    const template = document.createElement("template");
    template.innerHTML = str;
    $containerList.appendChild(template.content.cloneNode(true))


  })
}

export default renderListPokemon;