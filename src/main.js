import peticion from "./modules/peticion"

const mostrar = async() => {
  const list = [];
  for(let i = 1; i <= 100; i++) {
    let elemento = await peticion(i);
    list.push(elemento)
  }
  console.log(list)
}

mostrar()