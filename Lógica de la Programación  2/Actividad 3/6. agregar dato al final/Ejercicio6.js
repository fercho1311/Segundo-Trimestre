function agregarDato(arreglo, dato) {
    arreglo.push(dato);
    return arreglo;
}

let numeros = [1, 2, 3];

console.log(agregarDato(numeros, 5));
console.log(agregarDato(numeros, 4));