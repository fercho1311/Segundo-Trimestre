function dia_semana(num) {

    switch (num) {
        case 1:
            return "Lunes"

        case 2:
            return "Martes"

        case 3:
            return "Miercoles"

        case 4:
            return "Jueves"

        case 5:
            return "Viernes"

        case 6:
            return "Sabado"

        case 7:
            return "Domingo"

        default:
            return "Numero incorrecto, debe ingresar un numero del 1 al 7"
    }
}

let num = parseInt(prompt("Ingrese un numero del 1 al 7"))

alert(dia_semana(num))