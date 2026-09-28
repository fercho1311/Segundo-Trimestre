function buscarValor(arreglo, valor) {
    for (let i = 0; i < arreglo.length; i++) {
        if (arreglo[i] === valor) {
            return `Posicion: ${i}`;
        }
    }return -1;
}

let consolas = ["Switch 2", "PS5", "Xbox", "PC"];

console.log(buscarValor(consolas,"Switch 2"));