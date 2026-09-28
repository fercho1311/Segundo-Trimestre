function calcular_promedio(){
    var suma = 0
    for (var i = 0; i<10; i++){
        suma = suma + parseInt(prompt("Ingrese un numero"))
    }

    return suma / 10
}

alert(calcular_promedio())