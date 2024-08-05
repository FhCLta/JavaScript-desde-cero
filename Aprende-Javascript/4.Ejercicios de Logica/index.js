const cadena = "Hola Mundo"

for(let i = 0 ; i <= cadena.length; i++){
  console.log(i);
  
}
/*
1) Programa una función que cuente el número de caracteres de una cadena de texto, pe. miFuncion("Hola Mundo")
devolverá 10.
*/ 
// 1ra solucion

function contarCaracteres(cadena =""){
    if(!cadena){                                     //  if(!cadena) significa si la cadena de texto está vacia 
     console.warn('No ingresaste ninguna cadea')     //  imrpime no ingresaste ninguna cadena
    }else{
        console.info(`La cadena "${cadena}" tiene ${cadena.length} `);      
    }
}
contarCaracteres();
contarCaracteres("Hola mundo");

// 2da solucion
const contarCaracteres1 = (cadena1 ="") => // la arrow function no ncesito el return si tiene una sola expresion
(!cadena1)
? console.warn("Nos ingresaste ninguna cadena")
: console.info(`La cadena "${cadena1}" tiene ${cadena1.length} caracteres`);  
contarCaracteres1();
contarCaracteres1("Hola mundo");

/*
2) Programa una función que te devuelva el texto recortado según el número de caracteres indicados, 
pe. miFuncion("Hola Mundo", 4) devolverá "Hola".
*/
// 1ra solucion
const recortarTexto = (cadena = "") =>
(!cadena)    
? console.warn("No ingresaste ninguna cadena de texto")
: console.info(cadena.slice(0,4));     // cadena.slice toma dos argumentos: el índice de inicio (0) y el índice final (4), 

recortarTexto();
recortarTexto("Hola Mundo");

// 2da solucion más flexible
const recortarTexto1 = (cadena = "", longitud = undefined) =>
(!cadena)    
? console.warn("No ingresaste ninguna cadena de texto")
: console.info(cadena.slice(0, longitud));  // Utiliza el método slice para recortar la cadena

recortarTexto1();                // Llama a la función sin argumentos, imprime un aviso
recortarTexto1("Hola Mundo", 4); // Llama a la función con argumentos, imprime el texto recortado


/*
3) Programa una función que dada una String te devuelva un Array de textos separados por cierto caracter,
 pe. miFuncion('hola que tal', ' ') devolverá ['hola', 'que', 'tal'].
 */
 
 // 1ra solucion

 const cadenaArreglo = (cadena = "", separador = undefined) =>
 (!cadena)
 ? console.warn("No ingresa una cadena de texto")
 :(separador === undefined)
 ? console.warn("No ingresaste el carcter separador")
 :console.info(cadena.split(separador));   

 cadenaArreglo("Hola que tal", " ")

// 2da solucion más sencilla 

const cadenaAAreglo = (cadena = "")=>
(!cadena)
?console.warn('No ingresaste ninguna candena')
:console.info(cadena.split(" ",3)); 

cadenaAAreglo("Hola que tal");
// Cadena Vacía "": Divide la cadena en caracteres individuales. "" 
// Espacio " ": Divide la cadena en palabras basadas en espacios. " "
// Otro Carácter: Divide la cadena en subcadenas basadas en el carácter especificado. `,`

/*
4) Programa una función que repita un texto X veces, pe. miFuncion('Hola Mundo', 3)
 devolverá Hola Mundo Hola Mundo Hola Mundo.
*/

const repetirTexto = (texto = "",veces = undefined) =>{
    if(!texto) return console.warn('No ingresatste un texto');  
    
    if(veces === undefined)  return console.warn('No ingresaste el numero de veces a repetir el texto'); 

    if(veces === 0)  return console.error('El numero de veces no puede ser 0'); 

    if(Math.sign(veces) === -1)  return console.error('El numero de veces no puede ser negativo');
    
    for(let i = 1; i <= veces; i++){
        console.info(`${texto}, ${i}`)
    }
}
repetirTexto("Hola Mundo",3);
repetirTexto("Hola Mundo",0);
repetirTexto("Hola Mundo",-1);
repetirTexto("",20);
repetirTexto("Hola Mundo");



/*
5) Programa una función que invierta las palabras de una cadena de texto, pe. miFuncion("Hola Mundo")
 devolverá "odnuM aloH".
 */
const invertirCadena = (cadena = "") =>
(!cadena)    
?console.warn("No ingresaste una cadena")
:console.info(cadena.split("").reverse().join(""));

invertirCadena("Hola Mundo");

// join funciona similar a split pero la diferencia es que une losc caracteres separados

 

/*
6) Programa una función para contar el número de veces que se repite una palabra en un texto largo,
 pe. miFuncion("hola mundo adios mundo", "mundo") devolverá 2.
 */
 const textoEnCadena = (cadena = "",texto = "") =>{
    if(!cadena) return console.warn("No ingresaste el texto largo");

    if(!texto) return console.warn('Nom ingresaste la palabra a evaluar');
    let i = 0,
     contador = 0;

    while(i !== -1){
        i = cadena.indexOf(texto, i);
        if (i !== -1) {
            i++;
            contador++;      // me indica el # de veces que está la palabra dentro de la cadena de texto
        }
    }
    return console.info(`La palabra ${texto} se repite ${contador} veces`);
} 

textoEnCadena("hola  mundo adios mundo", "mundo");
textoEnCadena("hola hola mundo adios mundo", "hola"); // ejemplo 2

 
 
 /*
7) Programa una función que valide si una palabra o frase dada,
 es un palíndromo (que se lee igual en un sentido que en otro), pe. mifuncion("Salas") devolverá true.
 */

 const palíndromo = (palabra = "") =>{
    if(!palabra) return console.warn("No ingresaste una palabra o frase");
    palabra = palabra.toLocaleLowerCase();  // conveirte la palabra a miniscula
    let alReves = palabra.split("").reverse().join("");

    return (palabra === alReves)
    ?console.info(`Si es palíndromo, Palabra original ${palabra}, Palabra al reves ${alReves}`)
    :console.info(`No es palíndromo, ${palabra}, Palabra al reves ${alReves}`); 
 }
 palíndromo();
 palíndromo('Hola Mundo')
 palíndromo('salas');



 /*
8) Programa una función que elimine cierto patrón de caracteres de un texto dado, 
pe. miFuncion("xyz1, xyz2, xyz3, xyz4 y xyz5", "xyz") devolverá  "1, 2, 3, 4 y 5.
*/
const eliminarCaracteres = (texto = "", patron ="")=>
(!texto)
?console.warn("No ingresaste un texto")
:(!patron)
? console.warn("No ingresaste un patrón de caracteres")
:console.info(texto.replace(new RegExp(patron,"ig"),""));

eliminarCaracteres();
eliminarCaracteres("xyz1, xyz2, xyz3, xyz4 y xyz5");  
eliminarCaracteres("xyz1, xyz2, xyz3, xyz4 y xyz5", "xyz");    




/*
9) Programa una función que obtenga un numero aleatorio entre 501 y 600.
*/

/*
10) Programa una función que reciba un número y evalúe si es capicúa o no 
(que se lee igual en un sentido que en otro), pe. miFuncion(2002) devolverá true.
*/


/*
11) Programa una función que calcule el factorial de un número 
(El factorial de un entero positivo n, se define como el producto de todos los números enteros
 positivos desde 1 hasta n), pe. miFuncion(5) devolverá 120.
 */