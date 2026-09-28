function solicitar_num(arreglo){
  for (let i = 0; i < arreglo.length; i++){
    arreglo[i] = parseInt(prompt("Ingrese un numero"));
  }return arreglo;
}

function sumar(arreglo1){
  let suma = 0
  for(let i = 0; i < arreglo1.length; i++){
     suma = suma + arreglo1[i]
  }return suma;
}

let arreglo1 = Array(10);
solicitar_num(arreglo1);
let suma = sumar(arreglo1);


alert(`Resultado de suma de los numeros ingresados: ${suma}`)
console.log(arreglo1);
console.log(`Resultado de suma: ${suma}`);