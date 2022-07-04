const contador = (list) => {
  const obj = {};

  list.forEach(element => {
    if(obj.hasOwnProperty(element)) {
      obj[element] += 1;
    }else {
      obj[element] = 1;
    }
  });

  const propertyList = Object.keys(obj);
  const finalList = [];

  propertyList.forEach(property => {
    const l = [property, obj[property]];
    finalList.push(l);
  })

  return finalList;
}

export default contador;