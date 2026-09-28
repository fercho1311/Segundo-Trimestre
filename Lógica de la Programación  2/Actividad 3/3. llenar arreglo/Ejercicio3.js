function numAleatorio(){
  return Math.floor(Math.random() * 100) + 1;
}

function crearArreglo(tamano){
  return Array(tamano);
} 

function llenarArreglo(tamano){
  let arreglo = crearArreglo(tamano);
  for(let i = 0; i < arreglo.length; i++){
    arreglo[i] = numAleatorio();
  }
  return(arreglo);
}

console.log(llenarArreglo(5))
console.log(llenarArreglo(10))