"use strict";
// import * as readline from 'readline'
// declare variable
// let gretting : string = 'Hello world!';
// console.log(gretting)
// const cat: string = '';
// if (gretting == cat){
//     console.log('The greeting is the same as the cat')
// }
// const value = readline.createInterface({
//     input: process.stdin,
//     output: process.stdout
// })
// value.question('Insert your name:', (name: string)=>{
//     console.log(`Hello ${name}!`)
//     value.close()
// })
// let array: Array<String> =['Juan', 'Ana', 'Andres', 'Laura']
// for (let data of array){
//     console.log(data)
// }
// for(let i = 0; i<array.length; i++){
//     console.log(array[i])
// }
let info = '';
let bol = true ? true : false; // operador ternario 
const Animals = {
    dog: 'Dog',
};
// JS
function main() {
}
// function name(name:string): void{ // No retorna 
// }
function element() {
    return '';
}
function x() {
    return [];
}
const y = () => {
    return [];
};
const z = (numero) => numero.toString();
const numero = 2000;
console.log(z(numero));
let m = function (a) {
    return a.toString();
};
function p() {
    return '';
}
class Estudiante {
    constructor(name, lastname) {
        this.name = name;
    }
    get() {
    }
    static set() {
    }
    rm() {
        Estudiante.set();
    }
}
Estudiante.set();
class Notas extends Estudiante {
    constructor(nota) {
        super("Juan", "Marin");
        this.nota = nota;
    }
    set() {
        this.nota = null;
    }
}
class mr {
    rm() {
        console.log('Abstract method');
    }
}
class po extends mr {
    rm() {
        console.log('Child method');
    }
}
class poo {
}
// ------------------------------------------------------------------------------------------------------
class Animal {
    constructor(nombre, edad) {
        this.nombre = nombre;
        this.edad = edad;
    }
    obtenerNombre() {
        return this.nombre;
    }
    obtenerEdad() {
        return this.edad;
    }
    cambiarNombre(nuevoNombre) {
        this.nombre = nuevoNombre;
    }
    static infoGeneral() {
        return "Los animales tienen diferentes tipos de sonidos y comportamientos.";
    }
}
class Perro extends Animal {
    hacerSonido() {
        console.log("Guau!");
    }
}
class Gato extends Animal {
    hacerSonido() {
        console.log("Miau!");
    }
}
function hacerSonidoDelAnimal(animal) {
    animal.hacerSonido();
}
const mydog = new Perro("Firulais", 5);
const mycat = new Gato("Michi", 3);
console.log(`${mydog.obtenerNombre()} tiene ${mydog.obtenerEdad()} años.`);
mydog.cambiarNombre("Max");
console.log(`Nuevo nombre del perro: ${mydog.obtenerNombre()}`);
console.log(Animal.infoGeneral());
hacerSonidoDelAnimal(mydog);
hacerSonidoDelAnimal(mycat);
