function calcular_factorial(num) {
  if (num == 0) {
    return 1
  } else {
    return num * calcular_factorial(num - 1)
  }
}

var num = Number(prompt("Ingrese el numero a calcular"))

if (num < 0 || !Number.isInteger(num)) {
  alert("Debe ingresar un numero entero positivo")
} else {
  alert(`${num}! = ${calcular_factorial(num)}`)
}