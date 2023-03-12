//Ejercicio 1

/* Construir el algoritmo para un programa que ingrese tres
notas de un alumno, si el promedio es menor o igual a 3.9
mostrar un mensaje "Estudie“, de lo contrario un mensaje que
diga "becado" */
let notas = []
let totalNotas = 0
let promedio=0
for (i = 0; i < 3; i++) {
 notas.push(prompt('Digite la nota ' + (i + 1)))
 totalNotas += parseInt(notas[i])
}

promedio=totalNotas/3;
promedio>3.9?console.log("Becado"):console.log("Estudie")
