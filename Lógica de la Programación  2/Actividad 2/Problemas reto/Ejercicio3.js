function pedirNumero(mensaje){
    let entrada = prompt(mensaje);

    while (entrada === null || entrada.trim() === "" || isNaN(entrada)){
        alert("Debe ingresar un número valido");
        entrada = prompt(mensaje);
    }return parseFloat(entrada);
}

let numeros = [];

for (let i = 0; i < 10; i++){
    numeros[i] = pedirNumero("Ingrese el número " + (i + 1));
}

console.log(numeros)

for (let i = 0; i < numeros.length; i++){
    for (let j = 0; j < numeros.length - 1; j++){
        if (numeros[j] > numeros[j + 1]){
            let aux = numeros[j];
            numeros[j] = numeros[j + 1];
            numeros[j + 1] = aux;
        }
    }
}

console.log(numeros)