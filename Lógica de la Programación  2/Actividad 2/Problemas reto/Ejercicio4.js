function crearCalendario(dias, inicio) {

    let matriz = [];
    let semana = [];

    for (let i = 0; i < inicio; i++) {
        semana.push("X");
    }
    for (let dia = 1; dia <= dias; dia++) {

        semana.push(dia);

        if (semana.length === 7) {
            matriz.push(semana);
            semana = [];
        }
    }
    if (semana.length > 0) {
        while (semana.length < 7) {
            semana.push("X");
        }
        matriz.push(semana);
    }return matriz;
}

function mostrarCalendarioConsole(matriz, mes) {

    console.log(mes);
    console.log("Dom\tLun\tMar\tMié\tJue\tVie\tSáb");

    for (let i = 0; i < matriz.length; i++) {
        let fila = "";
        for (let j = 0; j < matriz[i].length; j++) {
            fila += matriz[i][j] + "\t";
        }

        console.log(fila);
    }
}

let mes = "Junio";
let diasDelMes = 30;
let inicioSemana = 1;

let calendario = crearCalendario(diasDelMes, inicioSemana);

mostrarCalendarioConsole(calendario, mes);