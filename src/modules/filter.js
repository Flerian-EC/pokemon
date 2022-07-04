import axios from "axios";
import contador from "./funContador";

const $filter = document.querySelector("#filter");
const $container = document.querySelector(".home-pokemon-list__pokemons");
const $filetContainer = document.querySelector(".home-pokemon-filter")
const $filterButton = document.querySelector(".button-fil")

const tiposPokemon = async() => {
  const response = await axios.get("https://pokeapi.co/api/v2/type?limit=10000&offset=0");

  let data = response.data.results.map(obj => {
    return obj.url
  });

  let dataPokemon = []

  for(let i = 0; i < data.length; i++) {
    let dat = await axios.get(data[i]);
    dataPokemon.push(dat.data);
  }

  dataPokemon = dataPokemon.map((obj) => {

    const object = {
      name: obj.name, 
      pokemons: obj.pokemon
    }

    return object
  })

  dataPokemon = dataPokemon.filter((obj) => {
    return (obj.pokemons.length !== 0)
  })

  let count = 0;
  dataPokemon.forEach((obj) => {
    obj.id = count;
    count += 1;
  })
  return dataPokemon
}


const renderFilter = async() => {

  $filter.addEventListener("click", (e) => {
    $container.innerHTML = "";
    $filetContainer.style.display = "block";
  })

  const tipos = Array(18).fill(false);

  let $buttons = document.querySelectorAll('p[iden="but"]');
  $buttons = [...$buttons]

  $buttons.forEach((element, id) => {
    element.addEventListener("click", (e) => {
      tipos[id] = !tipos[id]

      if(tipos[id]) {
        element.classList.add("button-active");
      }else {
        element.classList.remove("button-active");
      }
    })
  })

  const data = await tiposPokemon();

  
  $filterButton.addEventListener("click", (e) => {
    let tiposFin = tipos.map((e,i) => {return {value: e, id: i}});
    tiposFin = tiposFin.filter(obj => {return (obj.value)});

    if (tiposFin.length === 0) {alert("No ingresaste ningun filtro"); return} ;
    
    const dataFinal = [];
    tiposFin.forEach(obj => {
      dataFinal.push(data[obj.id]);
    })


    let listaPokemonCompleta = []
    tiposFin.forEach(obj => {
      listaPokemonCompleta = listaPokemonCompleta.concat(data[obj.id].pokemons)
    })


    const repeat = contador(listaPokemonCompleta.map(e => {
      return e.pokemon.name;
    }))

    const listFinall = repeat.filter(l => {
      return (l[1] === dataFinal.length)
    })

    const finall = listFinall.map(element => {
      return element[0];
    })

    //lista con todos los pokemon que pasan el filtro
    console.log(finall)

    
  })
}

export default renderFilter;