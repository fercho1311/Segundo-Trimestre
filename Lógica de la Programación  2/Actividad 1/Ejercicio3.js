function calculadora_IMC(peso, altura){
  var IMC = 703 * peso / (altura * altura)
  return IMC
}

var peso = parseInt(prompt("Ingrese su peso en libras"))
var altura = parseInt(prompt("Ingrese su altura en pulgadas"))

if (peso == 0 || altura == 0){
  alert("Los valores no pueden ser cero")

} else {
  var resultado = calculadora_IMC(peso, altura)

  alert("Su indice de masa corporal es: " + resultado.toFixed(2))
}