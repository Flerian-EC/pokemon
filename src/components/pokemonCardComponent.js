import peticion from "../modules/peticion";
import { CARD_POKEMON } from "./pokemonCardTemplate";

class pokemonCard extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({mode: "open"});

    this.pokemonNumber = this.getAttribute("pokemon-number");
  }

  async render() {
    const obj = await peticion(this.pokemonNumber);
    console.log(obj.text)
    let template = document.createElement("template");
    template.innerHTML = CARD_POKEMON({
      name: obj.name,
      img: obj.img,
      specie: obj.specie,
      type: obj.type,
      text: obj.text[0]
    });
    template = template.content.cloneNode(true);
    this.shadowRoot.appendChild(template);

    const text = this.shadowRoot.querySelector("#description-text");
    let contador = 1;
    const n = obj.text.length;
    text.addEventListener("click",() => {
      if(contador < n) {
        text.textContent = obj.text[contador];
        contador += 1;
      }else {
        text.textContent = obj.text[0];
        contador = 1;
      }
    });
  }

  connectedCallback() {
    this.render();
  }
}

window.customElements.define("pokemon-card", pokemonCard);