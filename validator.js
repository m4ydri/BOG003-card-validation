// Se crea una función 
const validator = {
  isValid : function(numeroTarjeta){ 
    const newNumeroTarjeta = numeroTarjeta.replaceAll(" ", "");
    const lista = newNumeroTarjeta.split("") .reverse();
    const listaInt = lista.map((e) => parseInt(e));
    let sum = 0;
    //cada elemento impar de nuestro array se pasara tal cual al nuevo array
    for(let i = 0; i < listaInt.length; i++) {
      let resultado = listaInt[i]; 
      if(i % 2 !== 0) {  
        resultado = listaInt[i] * 2; 
        if(resultado >= 10) {
          resultado = (resultado - 10) + 1; 
        }
      }
      sum = sum + resultado;
    } 
    //Se evalua la suma de valores, si es divisible entre 10 con residuo 0 correspondera a una tarjeta valida.
    if(sum % 10 === 0 ){
      return true;
    }
    // si nuestro residuo no es 0 sera una tarjeta invalida.
    return false;
  },
  //Acá creamos una función que nos ayude a retornar los ultimos 4 digitos
  maskify:  function(numeroTarjeta) {
    if(numeroTarjeta.length <= 4) {
      return numeroTarjeta;
    }
    //  
    let caracter = "";
    const x = numeroTarjeta.length - 4;
    for(let i = 0; i < x ; i++) {
      caracter = caracter + "#";
    }
    // Aca nos retornará solo los ultimos 4 digitos
    return  caracter + numeroTarjeta.slice(-4);
  }
};

export default validator;
