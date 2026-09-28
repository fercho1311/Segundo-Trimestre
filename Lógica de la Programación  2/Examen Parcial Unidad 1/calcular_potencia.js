function calcular_potencia (n, m){
    if (m == 0){      
        return 1
        }
    else
        resultado = n * calcular_potencia(n, m - 1)
        return resultado
}

var n = 2
var m = 3

var resultado = calcular_potencia(n, m)

console.log(`${n}^${m} = ${n} x ${n} x ${n} = ${resultado}`)