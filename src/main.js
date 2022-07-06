import listPokemon from "./modules/listaPokemon"
import renderFilter from "./modules/filter"


const pokeball = document.querySelector("#pokeball");
pokeball.addEventListener("click", (e) => {
  window.location.reload();
})

listPokemon()
renderFilter()