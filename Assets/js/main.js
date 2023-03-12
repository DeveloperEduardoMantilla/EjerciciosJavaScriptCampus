//Ejercicio 10
/* 
Desarrolle un programa cíclico que capture un dato
numérico cada vez, y los vaya acumulando. El programa se
detiene cuando el usuario digita un cero. El programa debe
mostrar: LA SUMATORIA DE LOS VALORES, EL VALOR DEL
PROMEDIO, CUÁNTOS VALORES FUERON DIGITADOS, MAYOR
VALOR Y MENOR VALOR..*/
let numeros=[]
let opcion=1;
while(opcion!=0){
    opcion = parseInt(prompt("Digite un numero"));
    opcion!=0?numeros.push(opcion):console.log("")
}
const suma = numeros.reduce((valorAnterior, valorActual) => {
    return valorAnterior + valorActual;
  }, 0);
let promedio = suma / numeros.length;

console.log(`Sumatoria de la lista de numeros: ${suma}
Promedio de la lista de numeros: ${promedio}
Tamaño de la lista de numeros: ${numeros.length}
Numero maximo de la lista de numeros: ${Math.max(...numeros)}
Numero minimo de la lista de numeros: ${Math.min(...numeros)}`)