//grupo de datos individuales
var nombre = "jose";
var apellido = "sanchez";
var edad = 45;

var nombre2 = "juana";
var apellido2 = "lopez";
var edad2 = 23;

//array
var persona1 = ["jose","sanchez",45];
var persona2 = ["juana","lopez",23];

//matriz
var personas = [
                ["jose","sanchez",45],
                ["juana","lopez",23],
                ["luis","gomez",38]
];

//si yo quisiera saber cual es el apellido de gomez, para poder seleccionarlo es asi
//console.log(personas[2][1])

//objeto
var personal = {
    nombre : "david",
    edad : 24,
    comidaFavorita : "hamburguesa",
};

//combinacion de objetos con arrays
var arrayDeObjetos = [
    {
        nombre : "david",
        edad : 24,
        comidaFavorita : "hamburguesa",
    },
    {
        nombre : "sally",
        edad : 22,
        comidaFavorita : "shawarma",
    },
    {
        nombre : "steven",
        edad : 18,
        comidaFavorita : "pizza",
    },
];

//si yo quiero saber la comida favorita de sally se busca asi
//console.log(arrayDeObjetos[1].comidaFavorita)


console.log(persona1)

//agregamos un elemento al final usando un metodo
persona1.push("casado");
console.log(persona1);

//agregamos un elemento al principio
persona1.unshift("operario");
console.log(persona1);

//para quitar elementos al final
let final= persona1.pop();
console.log(persona1);

//para quitar elementos al principio
let inicio = persona1.shift();
console.log(persona1);

//POO
//-abstraccion: simplificar las caracteristicas del objeto
//-modularizacion: seccionar un problema grande en tareas faciles
//-encapsulamiento: toda la info queda privado asi el usuario no ingresa facilmente
//-polimorfismo: es como un objeto se comporta de manera distinta ante el mismo metodo

class comida{
    constructor(id, nombre, color){
        this.id = id;
        this.nombre = nombre;
        this.color = color;
    }

        nombrar(){
            return '${this.nombre} de color{this.color}';
    }
}
class galleta extends comida{
    constructor(id, nombre, color, sabor){
        super (id, nombre, color);
        this.sabor = sabor;
    }
    nombrarGalleta(){
        return 'galletas ${this.nombre}sabor ${this.sabor}';
    }
}

const manzana = new comida(1, "manzana", "rojo");
const pera = new comida(2, "pera", "verde");

const oreo = new galleta(3, "oreos", "negro", "chocolate");
const chokis = new galleta(4, "chokis", "marron", "vainilla");

console.log(manzana);
console.log(pera)
console.log(oreo.nombrarGalleta());
console.log(chokis.nombrarGalleta());

