//Ejercicio 3
/* 
Construir el algoritmo para determinar el voltaje de un
circuito a partir de la resistencia y la intensidad de corriente. */

let resistencia = parseInt(prompt('Digite la resistencia'))
let intensidad = parseInt(prompt('Digite la intensidad'))

let voltaje = resistencia * intensidad

console.log('El voltaje del circuito es: ' + voltaje + ' Ohmio')
