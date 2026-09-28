let diasSemana = ["Domingo", "Lunes", "Martes", "Miercoles", "Jueves", "Viernes", "Sabado"]

function consultarDia(dia){
    
    if(dia < 0 || dia > 6){
        return "Dia no valido"
    }
    return diasSemana[dia];
}

console.log(consultarDia(0));
console.log(consultarDia(1));
console.log(consultarDia(2));
console.log(consultarDia(3));
console.log(consultarDia(4));
console.log(consultarDia(5));
console.log(consultarDia(6));
console.log(consultarDia(8));