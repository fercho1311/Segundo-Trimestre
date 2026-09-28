function solicitar_num(arreglo){
  for(let i = 0; i < arreglo.length; i++){
    arreglo[i] = parseInt(prompt("Ingrese un numero"));
  }
  return arreglo;
}

let arreglo1 = Array(10);

arreglo1 = solicitar_num(arreglo1)
alert(`[${arreglo1}]`);
console.log(`[${arreglo1}]`);