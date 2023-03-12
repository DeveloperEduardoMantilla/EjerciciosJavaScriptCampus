//Ejercicio 9
/* 
N atletas han pasado a finales en salto triple en los juegos
olímpicos femenino de 2022. Diseñe un programa que pida por
teclado los nombres de cada atleta finalista y a su vez, sus
marcas del salto en metros. Informar el nombre de la atleta
campeona que se quede con la medalla de oro y si rompió
récord, reportar el pago que será de 500 millones. El récord
esta en 15,50 metros.*/
let competidores=[]
let lista='';
let record='';
let mensaje='';
function atleta(nombre,marca){
    this.nombre=nombre;
    this.marca=marca;
}
do{
    let nombre = prompt('Digite su nombre: ');
    let marca = prompt('Digite su marca: ');
    let atle = new atleta(nombre, marca);
    competidores.push(atle);
}while(confirm("¿Desea ingresar otro competidor?"))
record=competidores[0].marca;
mensaje=`El competidor con mayor recor es ${competidores[0].nombre} con un recor de ${record} metros`;

for (let i=0; i<competidores.length; i++) {
    lista +=`Nombre: ${competidores[i].nombre} Marca: ${competidores[i].marca} metros \n`;

    if(competidores[i].marca>record){
        record=competidores[i].marca;
        mensaje=`El competidor con mayor record es ${competidores[i].nombre} con un recor de ${record} metros`;
    }
}

console.log(lista)
console.log(mensaje)
