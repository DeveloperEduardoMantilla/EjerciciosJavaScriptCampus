//Ejercicio 4
/* 
Construir el algoritmo que solicite el nombre y edad de 3
personas y determine el nombre de la persona con mayor edad. */

let datos = []

function persona(id,nombre, edad){
    this.id=id;
    this.nombre= nombre;
    this.edad=edad;
}

for (let i=0; i <3; i++) {
    let nombre=prompt("Por favor escriba su nombre");
    let edad=parseInt(prompt("Por favor escriba su edad"));
    let per = new persona(i,nombre,edad);
    datos.push(per);
}
mostrarListado();

function mostrarListado(){
    let lista='';
    let edad=0;
    let resultado= "";
    for(let i=0; i<datos.length; i++){
        lista+=
            'id: ' + datos[i].id +
            ' nombre: ' + datos[i].nombre +
            ' edad: ' + datos[i].edad + '\n'; 
        if(edad<datos[i].edad){
            edad=datos[i].edad;
            resultado="El jugador " + datos[i].nombre + " es el jugador con mayor edad, su edad es "+ datos[i].edad;
        }     
    }
    console.log('=======Lista de Jugadores=======');
    console.log(lista);
    console.log(resultado);
  }