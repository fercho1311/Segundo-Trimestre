function solicitar_num(arreglo){
  for (let i = 0; i < arreglo.length; i++){
    arreglo[i] = parseInt(prompt("Ingrese un numero"));
  }return arreglo;
}

function obtenerMayor(arreglo){
  let mayor = arreglo[0];

  for (let i = 1; i < arreglo.length; i++){
    if (arreglo[i] > mayor) {
      mayor = arreglo[i];
    }
  }return mayor;
}

function obtenerMenor(arreglo){
  let menor = arreglo[0];

  for (let i = 1; i < arreglo.length; i++){
    if (arreglo[i] < menor) {
      menor = arreglo[i];
    }
  }return menor;
}

let arreglo1 = Array(10);
solicitar_num(arreglo1);

alert("Mayor: " + obtenerMayor(arreglo1));
alert("Menor: " + obtenerMenor(arreglo1));
console.log(`[${arreglo1}]`);