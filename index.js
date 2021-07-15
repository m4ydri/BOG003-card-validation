import validator from './validator.js';
// Boton desplegar formulario, donde se oculta o se hace visible
const buttonFormulario = document.getElementById("btnShow");
buttonFormulario.onclick = () => {
  const formulario = document.getElementById("formulario")
  if(formulario.classList.contains("none") === true){
      formulario.classList.remove("none");
  }else{ 
    formulario.classList.add("none");
  } 
}
// Obtenemos el elemento input que tiene por id 
const elemInputNumber = document.getElementById("input_number");
elemInputNumber.onkeyup = () => {
   
  // Obtengo el valor del input 
  const textInputNumTarjeta = elemInputNumber.value.replaceAll(" ", "");
  // Acá hacemos que cada 4 digitos me de un espacio
  if(textInputNumTarjeta.length % 4 === 0) {
    elemInputNumber.value = elemInputNumber.value + " ";
  }
  // le doy un nuevo valor al input
  elemInputNumber.value = elemInputNumber.value.slice(0, 19);

  const elemNumTarjeta = document.getElementById("num_tarjeta");
  elemNumTarjeta.innerHTML = validator.maskify(textInputNumTarjeta);
}  
// Obtenemos el input name 
const inputName = document.getElementById("input_name");
inputName.onkeyup = () => {
  const textNameTarjeta = document.getElementById("name_tarjeta");
  textNameTarjeta.innerText = inputName.value;
}

// Obtenemos el input Mes 
const inputMonth = document.getElementById("input_month");
inputMonth.onkeyup = () => {
  const textMonth = document.getElementById("text_month");
  textMonth.innerHTML = inputMonth.value.slice(0, 2);
  inputMonth.value = inputMonth.value.slice(0, 2);
}
// Obtenemos el input  Año
const inputYear = document.getElementById("input_year");
inputYear.onkeyup = () => {
  const textYear = document.getElementById("text_year");
  textYear.innerHTML = inputYear.value.slice(0,2);
  inputYear.value = inputYear.value.slice(0, 2);
}
// Boton valida, el cual nos indicara la respuesta
const validar = document.getElementById("buttonValidation")
validar.onclick = (e) => {
  e.preventDefault();
  const isValid = validator.isValid(elemInputNumber.value);
  if(isValid === true) {
    alert("Gracias por tu apoyo!!")
  } else {
    alert("Lo siento tu tarjeta no es válida")
  }
}