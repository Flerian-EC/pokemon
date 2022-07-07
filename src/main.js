import listPokemon from "./modules/listaPokemon"
import renderFilter from "./modules/filter"
import search from "./modules/search";


const pokeball = document.querySelector("#pokeball");
pokeball.addEventListener("click", (e) => {
  window.location.reload();
})

listPokemon()
renderFilter()
search()