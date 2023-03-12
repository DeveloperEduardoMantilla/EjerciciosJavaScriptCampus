//Ejercicio 7
/* 
Programa que pida el ingreso del nombre y precio de un artículo y la
cantidad que lleva el cliente. Mostrar lo que debe pagar el comprador
en su factura.*/

let nombre="";
let precio="";
let cantidad="";

nombre=prompt("Por favor digite el nombre del producto");
precio=parseFloat(prompt("Por favor digite el precio del producto"));
cantidad=parseInt(prompt("Digite la cantidad de productos"));

console.log(`Usted tiene que pagar un valor de ${cantidad*precio} por el producto ${nombre}, el cual lleva una cantidad de ${cantidad} productos.`)