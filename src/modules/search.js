import axios from "axios";


const search = () => {
  const $button = document.querySelector(
    "#header-button-search"
  );
  const $inputPokemon = document.querySelector(
    "#header-input-search"
  );

  $button.addEventListener("click", async(e) => {
    const $container = document.querySelector(
      ".home-pokemon-list__pokemons"
    );

    let value = $inputPokemon.value;
    value = value.toLowerCase();

    if(value === "") {
      alert("No ingresaste ningun nombre");
      return
    };

    const val = await axios.get(`https://pokeapi.co/api/v2/pokemon/${value}`)
    .catch(err => {
      alert("El pokemon " + value.toUpperCase() + " no existe" );
    })
    console.log(val.data)

    if(typeof val.data.name !== "string") {
      alert("El pokemon " + value.toUpperCase() + " no existe" );
      return
    };

    $container.innerHTML = `<pokemon-card pokemon-number="${value}"></pokemon-card>`
  })

}


export default search