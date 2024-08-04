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
const contarCaracteres1 = (cadena1 ="") =>
(!cadena1)? console.warn("Nos ingresaste ninguna cadena")
: console.info(`La cadena "${cadena1}" tiene ${cadena1.length} caracteres`);  
contarCaracteres1();
contarCaracteres1("Hola mundo");


/*
2) Programa una función que te devuelva el texto recortado según el número de caracteres indicados, 
pe. miFuncion("Hola Mundo", 4) devolverá "Hola".
*/

/*
3) Programa una función que dada una String te devuelva un Array de textos separados por cierto caracter,
 pe. miFuncion('hola que tal', ' ') devolverá ['hola', 'que', 'tal'].
 */

/*
4) Programa una función que repita un texto X veces, pe. miFuncion('Hola Mundo', 3)
 devolverá Hola Mundo Hola Mundo Hola Mundo.
*/

