function solicitar_num(arreglo){
  for(let i = 0; i < arreglo.length; i++){
    arreglo[i] = parseInt(prompt("Ingrese un numero"));
  }
  return arreglo;
}

let arreglo1 = Array(3);
let arreglo2 = Array(3);
let arreglo3 = Array(3);

function rotarArreglos(arreglo1, arreglo2, arreglo3){
  let matriz = []
    for(let i = 0; i < arreglo1.length; i++){
        matriz[i] = [arreglo1[i], arreglo2[i], arreglo3[i]];
    } return matriz;
}

arreglo1 = solicitar_num(arreglo1);
arreglo2 = solicitar_num(arreglo2);
arreglo3 = solicitar_num(arreglo3);

let matriz = [arreglo1, arreglo2, arreglo3]

let matrizRotada = rotarArreglos(arreglo1, arreglo2, arreglo3);

alert(`[${arreglo1}]`);
console.log(`[${arreglo1}]`);

alert(`[${arreglo2}]`);
console.log(`[${arreglo2}]`);

alert(`[${arreglo3}]`);
console.log(`[${arreglo3}]`);

console.log(matriz);

console.log(matrizRotada);