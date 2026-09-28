function formatearArreglo(arreglo){
    let resultado = [];
    return resultado += `[#=^ ${arreglo} ^=#]`;
}

function crearMatriz(){
    let matriz = [];
    for (let i = 0; i < 3; i++) {
        let fila = [];
        for (let j = 0; j < 3; j++) {
            fila.push(Math.floor(Math.random() * 100) + 1);
        }
        matriz.push(fila);
    }
return matriz;
}

let matriz = crearMatriz();

console.log("Matriz inicial:");
for (let i = 0; i < matriz.length; i++){
    console.log(formatearArreglo(matriz[i]));
}

let nuevaFila = [];

for (let i = 0; i < 3; i++){
    let valor = prompt(`Ingrese el valor ${i + 1} para la nueva primera fila:`);
    nuevaFila.push(Number(valor));
}

matriz[0] = nuevaFila;

let nombre = "Fernando Castellanos";
matriz[2][2] = nombre;

console.log("\nMatriz final:");

for (let i = 0; i < matriz.length; i++){
    console.log(formatearArreglo(matriz[i]));
}