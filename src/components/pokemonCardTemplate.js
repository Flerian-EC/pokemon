const CARD_POKEMON = ({name, img, specie, textList, type}) => {

  //funcion para eliminar los /n de los textList
  const text = textList.map(element => {
    element = element
    return "<p></p>"
  });

  const template =`
  <h3>${name}</h3>
  <img src="${img}" alt="${name}">
  <div class="principal-container">
    <p class="carac">caracteristicas</p>
    <div class="carac-container">
      <p>${type}</p>
      <p>${specie}</p>
    </div>
  </div>
  `;
}