function obtenerElemento(arreglo, posicion) {
    if (posicion < 0 || posicion >= arreglo.length) {
        return "Posición invalida";
    }return arreglo[posicion];
}

let frutas = ["manzana", "pera", "uva", "mango"];

console.log(obtenerElemento(frutas, 2));
console.log(obtenerElemento(frutas, 0)); 
console.log(obtenerElemento(frutas, 4))