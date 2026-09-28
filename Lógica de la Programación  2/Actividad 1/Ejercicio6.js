function calcular_potencia (base, exponente){
    if (exponente == 0){      
        return 1
        }
    else
        resultado = base * calcular_potencia(base, exponente - 1)
        return resultado
}

var base = parseInt(prompt("Ingrese la base"))
var exponente = parseInt(prompt("Ingrese el exponente"))
var resultado = calcular_potencia(base, exponente)

alert("La potencia es: " +resultado)