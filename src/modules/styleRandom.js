const random = () => {
  let value;
  let number = Math.random();
  number = Math.round(number * 100);
  
  let porcentaje = Math.round(100 * (number / 100));
  
  if(porcentaje < 33) {
    value = 1;
  }else if(porcentaje >= 33 && porcentaje < 66) {
    value = 2;
  }else if(porcentaje >= 66) {
    value = 3;
  }

  return value
}