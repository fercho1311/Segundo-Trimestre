function calcular_descuento(precio, descuento){
    var valor_descuento = precio * descuento
    var precio_final = precio - valor_descuento

    return precio_final
}
console.log ("El precio final es: Q" +calcular_descuento(100,0.1))