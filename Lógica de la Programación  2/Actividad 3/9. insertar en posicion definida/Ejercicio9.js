function insertarDato(arreglo, posicion, dato){
  let nuevoArreglo = [];
    for(let i = 0; i < arreglo.length; i++){
      if(i === posicion){
        nuevoArreglo.push(dato);
      }
      nuevoArreglo.push(arreglo[i]);
    }
  if(posicion >= arreglo.length){
    nuevoArreglo.push(dato);
  } 
return nuevoArreglo;
} 

let numeros = [1, 2, 4, 5];

console.log(insertarDato(numeros, 2, 3));
console.log(insertarDato(numeros, 4, 6));