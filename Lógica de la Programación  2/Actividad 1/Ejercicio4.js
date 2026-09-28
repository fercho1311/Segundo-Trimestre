function imprimir_tabla_multiplicar(num){
    
  for (var i = 1; i <=10; i++){
   var multiplicar = num * i
   alert(`${num} x ${i} = ${num * i}`)
  }
}

var num = parseInt(prompt("Ingrese un numero a multiplicar"))

imprimir_tabla_multiplicar(num)