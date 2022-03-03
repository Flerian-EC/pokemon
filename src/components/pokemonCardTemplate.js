//Esta funcion obtiene como argumento el tipo del pokemon y en base al tipo retorna un objeto con estilos para ese tipo de pokemon

const typeColor = (typ) => {
  typ = typ[0]
  let gradient;
  let textContainer;
  if(typ.includes("Planta")) {
    gradient = "background-image: linear-gradient(to right top, #1a9174, #10a37e, #03b687, #00c88f, #00db96);"
    textContainer = "#00ba80";
  }else if(typ.includes("Fuego")) {
    gradient = "background-image: linear-gradient(to left bottom, #febe01, #ffae00, #ff9e05, #ff8e10, #fe7e1a);";
    textContainer = "#F08F00";
  }else if(typ.includes("Agua")) {
    gradient = "background-image: linear-gradient(to left bottom, #05dbf2, #00c2eb, #00aae0, #0090d2, #0477bf);";
    textContainer = "#05AFF2";
  }else if(typ.includes("Bicho")) {
    gradient = "background-image: linear-gradient(to left bottom, #b4d98f, #a7d07a, #9bc665, #8ebd4e, #82b336, #7daf2a, #77aa1b, #72a603, #72a603, #72a603, #72a603, #72a603);";
    textContainer = "#72A603";
  }else if(typ.includes("Veneno")) {
    gradient = "background-image: linear-gradient(to left bottom, #db4dff, #bc43da, #9d39b7, #803095, #642674);";
    textContainer = "#CC00FF";
  }else if(typ.includes("Volador")) {
    gradient = "background: linear-gradient(to right top, #2a8c82, #2e958b, #329f94, #37a89d, #3bb2a6, #44bbaf, #4cc3b7, #54ccc0, #62d5ca, #6fdfd4, #7be8de, #88f2e8);";
    textContainer = "#41BFB3";
  }else if(typ.includes("Eléctrico")) {
    gradient = "background-image: linear-gradient(to left bottom, #fffa45, #f9df36, #f1c62a, #e6ac23, #d9941e);";
    textContainer = "#FCCC28";
  }else if(typ.includes("Tierra")) {
    gradient = "background-image: linear-gradient(to left bottom, #ffbfa6, #de9f86, #be7f67, #9f6149, #80442d);";
    textContainer = "#CC9985";
  }else if(typ.includes("Hada")) {
    gradient = "background-image: linear-gradient(to left bottom, #ffc2fe, #ffaafb, #ff91f7, #ff74f2, #ff51ec);";
    textContainer = "#FF6AF0";
  }else if(typ.includes("Lucha")) {
    gradient = "background-image: linear-gradient(to left bottom, #4b8ca6, #418099, #37748c, #2c687f, #225c73);";
    textContainer = "#4B8CA6";
  }else if(typ.includes("Psíquico")) {
    gradient = "background-image: linear-gradient(to right top, #6d327c, #485DA6, #00a1ba, #00BF98, #36C486);";
    textContainer = "#089ab8";
  }else if(typ.includes("Roca")) {
    gradient = "background-image: linear-gradient(to left bottom, #c2c2c2, #b2b2b2, #a1a1a1, #929292, #828282);";
    textContainer = "#C2C2C2";
  }else if(typ.includes("Siniestro")) {
    gradient = "background-image: linear-gradient(to left bottom, #a6a6a6, #9c9c9c, #929292, #898989, #7f7f7f, #747474, #696969, #5f5f5f, #505050, #414141, #333333, #262626);";
    textContainer = "#A6A6A6";
  }else if(typ.includes("Fantasma")) {
    gradient = "background-image: linear-gradient(to left bottom, #0d7373, #096a6d, #076267, #075960, #085159);";
    textContainer = "#198479";
  }else if(typ.includes("Acero")) {
    gradient = "background-image: linear-gradient(to left bottom, #c2c2c2, #b2b2b2, #a1a1a1, #929292, #828282);";
    textContainer = "#C2C2C2";
  }else if(typ.includes("Hielo")) {
    gradient = "background-image: linear-gradient(to left bottom, #05dbf2, #00c2eb, #00aae0, #0090d2, #0477bf);";
    textContainer = "#05AFF2";
  }else if(typ.includes("Dragón")) {
    gradient = "background-image: linear-gradient(to right top, #c4eef2, #a3d3d8, #82b8be, #619ea4, #3f858c);";
    textContainer = "#3F858C";
  }else if(typ.includes("Normal")) {
    gradient = "background-color: #F2E0D0;";
    textContainer = "#F2D9BB";
  }
  

  return {
    gradient: gradient,
    container: textContainer
  }
}


//Este es el template del componente 'pokemon-card'
export const CARD_POKEMON = ({name, img, specie, text, type}) => {
  const objColor = typeColor(type)
  const style = `
  <style>
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
  html {
    font-size: 62.5%;
  }
  :host {
    width: 100%;
    height: fit-content;
    display: block;
    ${objColor.gradient}
    border-radius: 20px;
    max-width: 500px;
    padding: 20px !important;
  }
  h3 {
    text-align: center;
    font-family: Arial, Helvetica, sans-serif;
    font-size: 2.5rem;
    color: #034159;
    text-transform: uppercase;
  }
  img {
    width: 80%;
    display: block;
    margin: 0 auto;
    filter: drop-shadow(-1px 1px 2px #000000);
    -webkit-filter: drop-shadow(-1px 1px 2px #000000);
    -moz-filter: drop-shadow(-1px 1px 2px #000000);
  }
  .principal-container {
    width: 100%;
    background-color: ${objColor.container};
    height: fit-content;
    -webkit-box-shadow: -2px 2px 5px -1px rgba(0,0,0,0.4); 
    box-shadow: -2px 2px 5px -1px rgba(0,0,0,0.4);
    padding: 10px 6px;
    border-radius: 10px;
  }
  .principal-container P {
    color: #034159;
    font-size: 1.8rem;
    font-family: arial;
  }
  .carac {
    font-weight: bold;
    text-align: start;
    text-transform: uppercase;
    margin-bottom: 10px;
  }
  .carac-container {
    width: 100%;
    height: fit-content;
    margin-bottom: 10px;
  }
  .descrip {
    font-weight: bold;
    text-align: start;
    text-transform: uppercase;
    margin: 0;
  }
  #description-text {
    width: 100%;
    padding: 10px;
    text-decoration: underline;
    cursor: pointer;
    font-family: Fredoka;
  }
</style>
  `
  const template =`
  ${style}
  <h3>${name}</h3>
  <img src="${img}" alt="${name}">
  <div class="principal-container">
    <p class="carac">caracteristicas:</p>
    <div class="carac-container">
      <p>Tipo: ${type.join(" ")}</p>
      <p>Especie: ${specie.join(" ")}</p>
    </div>
    <p class="descrip">descripcion:</p>
    <p id="description-text">${text}</p>
  </div>
  `;

  return template;
}