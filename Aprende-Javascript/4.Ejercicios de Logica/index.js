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
const aleatorio = () => console.info(Math.round(Math.random()*100+500));
aleatorio();



/*
10) Programa una función que reciba un número y evalúe si es capicúa o no 
(que se lee igual en un sentido que en otro), pe. miFuncion(2002) devolverá true.
*/
const capicua = (numero = 0) =>{
    if(!numero) return console.warn("No ingresaste un número");

    if (typeof numero !== "number") return console.error(`El valor ${numero} ingresado
        no es un número`);
  
 numero = numero.toString();
 let alRevesN = numero.split("").reverse().join("");
 
 return(numero === alRevesN)
 ? console.info(`Si es capicua , numero original ${numero}, numero al reves ${alRevesN}`)
 : console.info(`No es capicua , numero original ${numero}, numero al reves ${alRevesN}`)
        
}
capicua();
capicua('191');
capicua(190);
capicua(2002);



/*
11) Programa una función que calcule el factorial de un número 
(El factorial de un entero positivo n, se define como el producto de todos los números enteros
 positivos desde 1 hasta n), pe. miFuncion(5) devolverá 120.
 */

 const factorial = (numero = undefined) =>{
    if(numero === undefined) return console.warn("No ingresate un numero");   
     
    if(typeof numero !== "number") return console.error(`El valor ${numero}
       ingresado no es un numero `);

    if(numero === 0) return console.error("El número no puede ser negativo");
    
    if(Math.sign(numero)=== -1)return console.error("El número no puede ser negativo");

    let factorial = 1;

    for (let i = numero; i > 1; i--){

       factorial = factorial * i;
    }

    return console.info(`El factorial de ${numero} es ${factorial}`);
}
factorial();
factorial("5");
factorial(-5);
factorial(5);



/*
12) Programa una función que determine si un número es primo
(aquel que solo es divisible por sí mismo y 1) o no, pe. miFuncion(7) devolverá true.
*/
 
const numeroPrimo = (numero1 = undefined) => {
    if(numero1 === undefined) return console.warn("No ingresate un numero");   
     
    if(typeof numero1 !== "number") return console.error(`El valor ${numero1}
       ingresado no es un numero `);

    if(numero1 === 0) return console.error("El número no puede ser 0");

    if(numero1 === 1) return console.error("El número no puede ser 1");
    
    if(Math.sign(numero1)=== -1)return console.error("El número no puede ser negativo");

    let divisible = false;

    for(let i = 2; i < numero1; i++){
       
        if((numero1 % i) === 0){
          divisible = true;  
          break;
        }
         
    }
    return(divisible)
    ?console.log(`El numero ${numero1}, No es primo`)
    : console.log(`El numero ${numero1}, Si es primo `);
}
numeroPrimo();
numeroPrimo("5");
numeroPrimo(0);
numeroPrimo(-1);
numeroPrimo(1);
numeroPrimo(5);



/*
13) Programa una función que determine si un número es par o impar,
 pe. miFuncion(29) devolverá Impar.
*/
const numeroParImpar = (numero = undefined)=>{
    if(numero === undefined) return console.warn("No ingresate un numero");   
     
    if(typeof numero !== "number") return console.error(`El valor ${numero}
       ingresado no es un numero `);
   
    return((numero%2)===0)
    ?console.info(`El numero ${numero} es Par`)
    :console.info(`El numero ${numero} es Impar`) 
}

numeroParImpar();
numeroParImpar("5");
numeroParImpar(5);
numeroParImpar(6);



/*
14) Programa una función para convertir grados Celsius a Fahrenheit y viceversa, pe. 
miFuncion(0,"C") devolverá 32°F.
*/

// 1ra solución
const convertirGrados = (grados = undefined, unidad = undefined)=>{
    if(grados === undefined) return console.warn("No ingresaste grados a convertir");

    if(typeof grados !== "number") return console.error(`El valor ${grados} ingresado, no es un numero`);

    if(unidad === undefined) return console.warn("No ingresaste el tipo de grado a convertir")

    if(typeof unidad !== "string") return console.error(`El valor ${unidad} ingresado, No es una cadena de texto`)
        
    if(unidad.length !== 1 || !/(C|F)/.test(unidad)) return console.warn('Valor de unidad no reconocido'); 
    
    if(unidad === "C"){
        return console.info(`${grados}°C=${Math.round((grados*(9/5)+32))}°F`);
    }else if(unidad === "F"){
        return console.info(`${grados}°C=${Math.round(((grados-32)*(5/9)))}°C`);
    }
    console.info("funciona");
}

convertirGrados();
convertirGrados("2");
convertirGrados(2);
convertirGrados(2,true);
convertirGrados(2,"Hola");
convertirGrados(2,"E");
convertirGrados(0,"C");
convertirGrados(100,"F");

// 2da solución

const convertirGrados1 = (grados = undefined, unidad = undefined) => {
    if (grados === undefined) return console.warn("No ingresaste grados a convertir");

    if (typeof grados !== "number") return console.error(`El valor ${grados} ingresado no es un número`);

    if (unidad === undefined) return console.warn("No ingresaste el tipo de grado a convertir");

    if (typeof unidad !== "string") return console.error(`El valor ${unidad} ingresado no es una cadena de texto`);
     
    // se usa otra manera de validad, la más común
    if (unidad.length !== 1 || (unidad !== "C" && unidad !== "F")) {
        return console.warn('Valor de unidad no reconocido');
    }

    if (unidad === "C") {
        return console.info(`${grados}°C = ${Math.round(grados * (9 / 5) + 32)}°F`);
    } else if (unidad === "F") {
        return console.info(`${grados}°F = ${Math.round((grados - 32) * (5 / 9))}°C`);
    }
}

convertirGrados1();
convertirGrados1("2");
convertirGrados1(2);
convertirGrados1(2, true);
convertirGrados1(2, "Hola");
convertirGrados1(2, "E");
convertirGrados1(0, "C");
convertirGrados1(100, "F");



/*
15) Programa una función para convertir números de base binaria a decimal y viceversa, 
pe. miFuncion(100,2) devolverá 4 base 10.
*/

/*
16) Programa una función que devuelva el monto final después de aplicar un descuento a una cantidad dada,
 pe. miFuncion(1000, 20) devolverá 800.
 */

 /*
17) Programa una función que dada una fecha válida determine cuantos años han pasado hasta el día de hoy, 
pe. miFuncion(new Date(1984,4,23)) devolverá 35 años (en 2020).
*/

/*
18) Programa una función que dada una cadena de texto cuente el número de vocales y consonantes, 
pe. miFuncion("Hola Mundo") devuelva Vocales: 4, Consonantes: 5.
*/




/*
19) Programa una función que valide que un texto sea un nombre válido,
 pe. miFuncion("Jonathan MirCha") devolverá verdadero.
 */





 /*
20) Programa una función que valide que un texto sea un email válido,
 pe. miFuncion("jonmircha@gmail.com") devolverá verdadero.
 */