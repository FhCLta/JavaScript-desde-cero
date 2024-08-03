export const PI = Math.PI;

export let usuario = "Jon";
let password = "Leo";



/* el export con default significa que no tengo que poner llaves para llamar a saludar
  y puedp ejecutar la funcion directamente y solamente se puede hacer una sola exportacion
  con el default y el defaul slo sirve para funciones declaradas*/


 export default function saludar(){
    console.log("Hola Modulos +ES6");
}

export class Saludar{
    constructor(){
        console.log('Hola Clases');
        
    }
}

/*
let password = "Leo";     // así es para exportar con una funcion expresada
export default password;
*/
