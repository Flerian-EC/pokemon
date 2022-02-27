const API = "https://pokeapi.co/api/v2/pokemon/";

const peticionPeticiones = async(api) => {
  const response = await fetch(api);
  const data = await response.json();
  return data
}
const filtro = (list) => {
  const miLista = [];
  list.forEach(element => {
    if(element.language.name === "es") {
      miLista.push(element);
    }
  });
  return miLista;
}

const peticion = async(num) => {
  const response = await fetch(API + num);
  const data = await response.json();

  const dataSpecies = await peticionPeticiones(data.species.url);
  const typeUrl = dataSpecies.egg_groups.map(element => {
    return element.url
  })
  const specie = [];
  for(let i = 0; i < typeUrl.length; i++) {
    let element = await peticionPeticiones(typeUrl[i]);
    element = filtro(element.names)[0];
    specie.push(element.name)
  }
  let textos = filtro(dataSpecies.flavor_text_entries).map(ele => {
    return ele.flavor_text;
  });
  textos = textos.filter((item,index)=>{
    return textos.indexOf(item) === index;
  })

  const typeComponents = data.types.map(element => {
    return element.type.url
  })
  const type = [];
  for(let i = 0; i < typeComponents.length; i++) {
    let t = await peticionPeticiones(typeComponents[i]);
    typeComponents[i] = t;
    t = filtro(t.names)[0];
    type.push(t.name);
  }

  //typeComponents;

  const obj = {
    name: filtro(dataSpecies.names)[0].name,
    img: data.sprites.other.home.front_default,
    specie: specie,
    text: textos,
    type: type
  }
  return obj;
}

export default peticion;