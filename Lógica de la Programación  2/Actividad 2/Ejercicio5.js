function llenar_arreglo(arreglo){
  for(let i = 0; i < arreglo.length; i++){
    arreglo[i] = Math.floor(Math.random() * 100) + 1;
  }return arreglo;
}

function buscarNumero(arreglo, numero){
  for (let i = 0; i < arreglo.length; i++){
    if (arreglo[i] === numero) {
      return i;
    }
  }return -1;
}

let arreglo1 = Array(10);

llenar_arreglo(arreglo1)

console.log(`[${arreglo1}]`);
alert(`[${arreglo1}]`);

let num = parseInt(prompt("Ingrese un mumero"))

let posicion = buscarNumero(arreglo1, num);

if (posicion !== -1){
  alert("El número existe en la posición: " + posicion);
} else {
  alert("-1");
}