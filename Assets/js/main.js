//Ejercicio 6
/* 
Construir el algoritmo en Javascript para un programa
para cualquier cantidad de estudiantes que lea el nombre,
el sexo y la nota definitiva y halle al estudiante con la mayor
nota y al estudiante con la menor nota y cuantos eran
hombres y cuantos mujeres. */

let estudiantes=[];
let id=0;
let lista='';
let respuesta="";
let respuesta2="";
let nota=0;
let notaMayor=0;
let notaMenor=0;
let hombres=0;
let mujeres=0;
function estudiante(id, nombre, sexo, notaF){
    this.id=id;
    this.nombre=nombre;
    this.sexo=sexo;
    this.notaF=notaF;
}
do{
    id++;
    let nombre = prompt("Digite su nombre:");
    let sexo = parseFloat(prompt("Digite su sexo Hombre(0) - Femenino(1):"));
    let notaF = parseFloat(prompt("Digite su nota final:"));
    let est = new estudiante(id, nombre, sexo, notaF);
    estudiantes.push(est);
} while (confirm('Desea guardar otro estudiante?'))

for(let i=0; i<estudiantes.length; i++){
    lista+=
        'id: ' + estudiantes[i].id +
        ' Nombre: ' + estudiantes[i].nombre +
        ' Sexo: ' + estudiantes[i].sexo +
        ' Nota Final: ' + estudiantes[i].notaF +'\n'; 
    if(estudiantes[i].notaF>nota){
        notaMayor=estudiantes[i].notaF;
        nota=estudiantes[i].notaF;
        respuesta="El estudiante "+ estudiantes[i].nombre + " obtuvo la mayor nota con una puntuacion de " + notaMayor;
    }
    notaMenor=estudiantes[0].notaF;
    if(estudiantes[i].notaF<notaMenor){
        notaMenor=estudiantes[i].notaF;
        respuesta2="El estudiante "+ estudiantes[i].nombre + " obtuvo la menor nota con una puntuacion de " + estudiantes[i].notaF;
    }
    estudiantes[i].sexo==0?hombres++:mujeres++
}
console.log(`====Lista de estudiantes==== \n
${lista}
${respuesta}
${respuesta2}
Cantidad de niñas: ${mujeres} 
Cantidad de hombres: ${hombres}
` 
)
