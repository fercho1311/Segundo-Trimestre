function llenar_arreglo(arreglo){
  for(let i = 0; i < arreglo.length; i++){
    arreglo[i] = Math.floor(Math.random() * 100) + 1;
  }return arreglo;
}

function sumar_arreglos(arreglo1, arreglo2){
  let suma = []
  for(let i = 0; i < arreglo1.length; i++){
    suma[i] = arreglo1[i] + arreglo2[i];
  }return suma;
}

let arreglo1 = Array(10);
let arreglo2 = Array(10);

llenar_arreglo(arreglo1)
llenar_arreglo(arreglo2)

let arreglo3 = sumar_arreglos(arreglo1, arreglo2)

console.log(`Arreglo 1: [${arreglo1}]`);
console.log(`Arreglo 2: [${arreglo2}]`);
console.log(`Arreglo 3 (suma): [${arreglo3}]`);


alert(`Arreglo 1: [${arreglo1} \n Arreglo 2: [${arreglo2}] \n Arreglo 3 (suma): [${arreglo3}]`);