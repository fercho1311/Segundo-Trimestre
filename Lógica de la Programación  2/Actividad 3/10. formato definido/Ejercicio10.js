function formatearArreglo(arreglo){
    let resultado = [];

    for (let i = 0; i < arreglo.length; i++){
        resultado.push(`[#=^${arreglo[i]}^=#]`);
    }
return resultado;
}

let datos = ["manzana", "pera", "uva"];

console.log(formatearArreglo(datos));