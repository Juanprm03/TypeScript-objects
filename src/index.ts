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

let info: string | number ='';

let bol:Boolean = true ? true : false; // operador ternario 

const Animals={
    dog: 'Dog',
}

interface Animal{
    name: string;
}

// JS
function main(){

}
// function name(name:string): void{ // No retorna 

// }

function element ():String{
    return ''
}

function x ():String[]{
    return []
}


const y:() => String[] = ():String[]=>{ // arrow functions
    return []
}

const z = (numero: number):String => numero.toString()

const numero:number = 2000
console.log(z(numero))

let m:Function = function (a:number):String{
    return a.toString()
}

function p():String{
    return ''
}
interface Persona{
    name:string
    data: ()=>{
        
    }
    info:Function
}

class Estudiante{
    name:string;
    lastname?:string;
    age?: string | number; 
    email?:string;
    constructor(name:string, lastname:string, ){
        this.name= name;
    }

    public get ():void{

    }

    static set():void{

    }

    private rm():void{
        Estudiante.set()
    }
    
}
Estudiante.set()

class Notas extends Estudiante{
    nota: Number | null
    constructor(nota:Number){
        super("Juan", "Marin")
        this.nota=nota;
    }
     public set():void{
        this.nota = null;
     }

}

abstract class mr{
    public rm (){
        console.log('Abstract method')
    }
}

class po extends mr{
    public rm ():void{
        console.log('Child method')
    }
}

interface ft{
    name?: string
}

class poo implements ft{

}



// ------------------------------------------------------------------------------------------------------
abstract class Animal {
 
    private nombre: string;
    private edad: number;

    constructor(nombre: string, edad: number) {  /// inicializar atriubutos
      this.nombre = nombre;
      this.edad = edad;
    }
  

    abstract hacerSonido(): void;
  

    public obtenerNombre(): string {  // obtener nombre del animal
      return this.nombre;
    }
  

    public obtenerEdad(): number { // obtener la edad 
      return this.edad;
    }
  
 
    public cambiarNombre(nuevoNombre: string): void { 
      this.nombre = nuevoNombre;
    }
  

    public static infoGeneral(): string {
      return "Los animales tienen diferentes tipos de sonidos y comportamientos.";
    }
  }
  

  class Perro extends Animal {

    public hacerSonido(): void {
      console.log("Guau!");
    }
  }
  

  class Gato extends Animal {

    public hacerSonido(): void {
      console.log("Miau!");
    }
  }
  
 
  function hacerSonidoDelAnimal(animal: Animal): void {
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