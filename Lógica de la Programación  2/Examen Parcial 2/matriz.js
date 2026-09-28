function ingresarMatriz(nombre){
    let matriz = [[], []];

    for (let i = 0; i < 2; i++){
        for (let j = 0; j < 2; j++){
            matriz[i][j] = prompt(`Ingrese el valor para ${nombre}[${i}][${j}]`);
        }
    }return matriz;
}

function concatenarMatrices(A, B){
    let C = [[], []];

    for (let i = 0; i < 2; i++){
        for (let j = 0; j < 2; j++){
            C[i][j] = A[i][j] + " " + B[i][j];
        }
    }return C;
}

let A = ingresarMatriz("A");
let B = ingresarMatriz("B");

let C = concatenarMatrices(A, B);

console.log("Matriz A:");
console.log(A);

console.log("Matriz B:");
console.log(B);

console.log("Matriz C:");
console.log(C);