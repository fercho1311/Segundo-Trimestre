let relaciones = [["Elena", "Pablo"],["Pablo", "Jorge"],["Rosa", "Elena"],["Mario", "Rosa"],["Mariano", "Mario"]];

function pedirTexto(mensaje){
    let entrada = prompt(mensaje);

    while (entrada === null || entrada.trim() === ""){
        alert("No puede estar vacío");
        entrada = prompt(mensaje);
    }return entrada.trim();
}

function buscarPadre(hijo, relaciones){
    for (let i = 0; i < relaciones.length; i++){
        if (relaciones[i][1] === hijo){
            return relaciones[i][0];
        }
    }return null;
}

function obtenerAncestros(nombre, relaciones){

    let ancestros = [];
    let actual = nombre;

    while (true){
        let padre = buscarPadre(actual, relaciones);
        if (padre === null){
            break;
        }
        ancestros.push(padre);
        actual = padre;
    }return ancestros;
}

let persona = pedirTexto("Ingrese el nombre del estudiante");

let resultado = obtenerAncestros(persona, relaciones);

console.log("Ancestros de " + persona + ":");
console.log(resultado.join(", "));
