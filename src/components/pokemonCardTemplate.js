export const CARD_POKEMON = ({name, img, specie, text, type}) => {

  const template =`
  <h3>${name}</h3>
  <img src="${img}" alt="${name}">
  <div class="principal-container">
    <p class="carac">caracteristicas</p>
    <div class="carac-container">
      <p>tipo: ${type.join(" ")}</p>
      <p>especie: ${specie.join(" ")}</p>
    </div>
    <p id="description-text">${text}</p>
  </div>
  `;

  return template;
}