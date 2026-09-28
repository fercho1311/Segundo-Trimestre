function eliminarElemento(arreglo){
  arreglo.pop();
  return arreglo;
}

let juegos = ["Zelda","Mario","Starfox", "Bayonetta"];

console.log(eliminarElemento(juegos));