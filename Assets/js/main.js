//Ejercicio 5
/* 
Construir el algoritmo que lea por teclado dos números,
si el primero es mayor al segundo informar su suma y
diferencia, en caso contrario, informar el producto y la
división del primero respecto al segundo. */
let datos=[], suma=0, diferencia=0, producto=0, division=0, mensaje="";

for (let i=0; i<2; i++) {
    let dato=parseInt(prompt("Digite el numero "+(i+1)));
    datos.push(dato);
}
if(datos[0]>datos[1]){
    suma=datos[0]+datos[1];
    diferencia=datos[0]-datos[1];
    mensaje="La suma de los numero "+datos[0]+"+"+datos[1]+" es: "+suma + " y su diferencia es de "+ diferencia; 
}else{
    producto=datos[0]*datos[1];
    division=datos[0]/datos[1];
    mensaje="El producto de los numero "+datos[0]+"*"+datos[1]+" es: "+producto + " y su division es de "+ division; 
}
console.log(mensaje)