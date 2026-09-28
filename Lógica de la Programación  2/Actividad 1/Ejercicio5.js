let opcion

function menu (){
   opcion = prompt(
    "Menu de calculadora:\n" +
    "Seleccione la operacion que desea realizar\n" +
    "1. Sumar\n" +
    "2. Restar\n" +
    "3. Multiplicar\n" +
    "4. Dividir\n" +
    "5. Salir"
    )
} 

function suma (num1, num2){
  var suma = num1 + num2
  return suma
}
// funcion de suma

function resta (num1, num2){
  var resta = num1 - num2
  return resta
}
// funcion resta

function multiplicacion (num1, num2){
  var multiplicacion = num1 * num2
  return multiplicacion
}
//funcion multiplicar

function division (num1, num2){
  var division = num1 / num2
  return division
}
//funcion de division 

//Datos ingresados por el usuario
function usuario (){
  num1 = parseInt(prompt("Ingrese el primer numero"))
  num2 = parseInt(prompt("Ingrese el segundo numero"))
}


do {
  menu()
  switch(opcion){
    case "1":
      usuario()
      alert(`${num1} + ${num2} = ${suma(num1, num2)}`)
      break;
    case "2":
      usuario()
      alert(`${num1} - ${num2} = ${resta(num1, num2)}`)
      break;
    case "3":
      usuario()
      alert(`${num1} x ${num2} = ${multiplicacion(num1, num2)}`)
      break;
    case "4":
      usuario()
      alert(`${num1} ÷ ${num2} = ${division(num1, num2)}`)
      break;
  }
} while(opcion != "5")