const readlineSync = require('readline-sync');
const numeroMes= parseInt(readlineSync.question("Ingrese un numero de mes (1-12):  "));
const meses = {
  1: "enero",
  2: "febrero",
  3: "marzo",
  4: "abril",
  5: "mayo",
  6: "junio",
  7: "julio",
  8: "agosto",
  9: "septiembre",
  10: "octubre",
  11: "noviembre",
  12: "diciembre"
  };
  let cantidadDeDias;
  if (numeroMes == 2) {
    cantidadDeDias = 28;
  } else if (numeroMes == 4 || numeroMes == 6 || numeroMes == 9 || numeroMes == 11) {
    cantidadDeDias = 30; 
  } else {
    cantidadDeDias = 31;  
  };
  let mes = meses[numeroMes];
if (numeroMes >= 1 && numeroMes <= 12){
  console.log("La cantidad de días del mes de " + mes + " es " + cantidadDeDias);
}else{
  console.log("Numero de mes inválido. Debe ser un numero del 1 al 12.");
};


