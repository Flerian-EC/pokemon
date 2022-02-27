import peticion from "../modules/peticion";

class pokemonCard extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({mode: "open"});

    this.pokemonNumber = this.getAttribute("pokemon-number");
  }
}