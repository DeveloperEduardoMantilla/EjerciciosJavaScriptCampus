//Ejercicio 2
/* Dado un número indicar si es par o impar y si es mayor de 10. */
let respuesta=" ";
let numero=0
do {
    numero = parseInt(prompt('Digite un numero para saber si par o impar', 5))
    if (numero % 2 == 0) {
        respuesta="";
        respuesta+='El numero ' + numero + ' es par';
        numero>9?respuesta+=" y es mayor a 10":respuesta+=" y es menor a 10";
        console.log(respuesta)
    } else {
        respuesta="";
        respuesta+='El numero ' + numero + ' es impar';
        numero>9?respuesta+=" y es mayor a 10":respuesta+=" y es menor a 10";
        console.log(respuesta)
    }
} while (confirm('Desea revisar otro numero?'))

