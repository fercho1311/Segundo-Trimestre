function pedirNumero(mensaje){
    let entrada = prompt(mensaje);

    while (entrada === null || entrada.trim() === "" || isNaN(entrada) || parseInt(entrada) <= 0){
        alert("Debe ingresar un número válido mayor que 0");
        entrada = prompt(mensaje);
    }return parseInt(entrada);
}

function pedirTexto(mensaje){
    let entrada = prompt(mensaje);

    while (entrada === null || entrada.trim() === ""){
        alert("Este campo no puede estar vacío");
        entrada = prompt(mensaje);
    }return entrada.trim();
}

function solicitar_nombre(cantidad){
    let lista_alumnos = [];

    for (let i = 0; i < cantidad; i++){
        lista_alumnos[i] = pedirTexto("Ingrese el nombre del alumno " + (i + 1));
    }return lista_alumnos;
}

function nombre_tarea(tareas){
    let lista_tareas = [];

    for (let i = 0; i < tareas; i++){
        lista_tareas[i] = pedirTexto("Ingrese el nombre de la tarea " + (i + 1));
    }return lista_tareas;
}

function pedirNotas(alumnos, tareas, listado_alumnos, listado_tareas){
    let lista_notas = [];

    for (let i = 0; i < alumnos; i++){
        lista_notas[i] = [];

        for (let j = 0; j < tareas; j++){
            lista_notas[i][j] = pedirNumero(`Ingrese la nota de ${listado_tareas[j]} de ${listado_alumnos[i]}`);
        }
    }
    return lista_notas;
}

function consultarNotas(alumnos, tareas, notas){

    // Mostrar lista de alumnos numerada
    let lista = "Seleccione un alumno:\n\n";

    for (let i = 0; i < alumnos.length; i++){
        lista += `${i + 1}. ${alumnos[i]}\n`;
    }

    let opcion = pedirNumero(lista);
    let indiceAlumno = opcion - 1;

    if (indiceAlumno < 0 || indiceAlumno >= alumnos.length){
        alert("Alumno no válido");
        return;
    }

    let resultado = `Notas de ${alumnos[indiceAlumno]}:\n\n`;

    for (let j = 0; j < tareas.length; j++){
        resultado += `${tareas[j]} : ${notas[indiceAlumno][j]}\n`;
    } alert(resultado);
}

let cantidad = pedirNumero("Ingrese la cantidad de alumnos");
let tareas = pedirNumero("Ingrese la cantidad de tareas");

let listado = solicitar_nombre(cantidad);
let listado_tareas = nombre_tarea(tareas);

let listado_notas = pedirNotas(cantidad, tareas, listado, listado_tareas);

consultarNotas(listado, listado_tareas, listado_notas);