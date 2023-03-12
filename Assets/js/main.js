//Ejercicio 8
/* 
Programa que Ingrese por teclado:
a. el valor del lado de un cuadrado para mostrar por pantalla el
perímetro del mismo
b. la base y la altura de un rectángulo para mostrar el área del
mismo*/
do{
    let opcion = prompt(`Por favor seleccion que desea hacer
    a. Hallar perimetro de un cuadrado
    b. Area de un triangulo`)
    switch (opcion) {
        case 'a':
            let perimetro=parseInt(prompt("Digite la medida de uno de los lados del cuadrado"));
            console.log("El perimetro del cuadrado es: " +(perimetro*4))
            break;
        case 'b':
            let base=parseInt(prompt("Digite la base del triangulo"));
            let altura=parseInt(prompt("Digite la altura del triangulo"));
            console.log("El area del triangulo es:" +((base*altura)/2));
            break;
        default:
            console.log("Opcion Incorrecta")
            break;
    }
}while(confirm("¿Desea realizar otra consulta?"))
