// variables

var hola = "Hola Mundo" // es una variable de ambito global // se queda guardada en el obejto windows
console.log(hola);  // lo que se imprime es el nombre de la variable que se declara

let Hello = "Hello World"  // es un variable de ambito de bloque // no se queda guardada en el obejto windows
console.log(Hello);

// windows es el objeto global dentro del navegador // el objeto windows no existe en nodejs

// en nodejs el objeto global se llama global // es el javascript del lado del servidor

// en java script un bloque es lo que está entre llaves {} 

const Pi = 3.14;  // se usa cuando la variable no va  cambiar su valor durante el flujo de su operación. 

// las constantes no pueden estar vacias.  // {} llaves son objetos   // [] parentesis son arreglos

let objeto = {
  nombre: "Jon",  // estos es un objeto
  edad: 35
}

console.log(objeto);
objeto.correo = "fyheim@gmail.com"; // para agregar un valor al objeto es con objeto. 

console.log(objeto); // despues de agregarle el correo

// la constante no funciona igual para valores primitivos cómo para los compuestos
// la constante no combia en los valores primitivos pero si cambia en los compuestos porque está dentro de un objeto
// lo mismo se aplica para los arreglos, function class  que son  valores compuestos

let colores = ["blanco", "negro","azul"]  // estos es un arreglo

console.log(colores);
colores.push("anaranjado");   // para agregar un valor al arreglo es con la funcion .push

console.log(colores); // despues de agregarle el color anaranjado


/* Tipos de Datos*/

//------------------------------//
// *Cadenas de texto "String"* //
//----------------------------//

// los metodos son acciones que hacen los objetos, siempre terminan en parentesis ()


let nombre = "Florencio"; 
let apellido = 'Hurtado'; // no hay diferencia entre las dobles comillas y las comillas simples

let saludo = new String("Hola mundo");// aquí esta creado con un constructor

console.log(nombre,apellido,saludo);
console.log(
  
  nombre.length, // el punto length es  para ver la cntidad de caracteres
  apellido.length,
  saludo.length,
  nombre.toLocaleUpperCase(),  // es para que nombre esté en mayúscula
  apellido.toLocaleLowerCase(), // es para que apellido esté en minículas
);

// .includes es para verificar si una palabra está dentro de un párrafo
// .trim lo que hace es quitar los espacios vacios en un párrafo
// .split se utiliza para dividir un objeto String en un array de cadenas 
// Ejemplo de .split
let texto = "Hola mundo, cómo estás?";
let palabras = texto.split(" ");
console.log(palabras); // ["Hola", "mundo,", "cómo", "estás?"]


//----------------------//
// *Template "String"* //
//--------------------//

// Concatenacion

let nombre1 = "Florencio";
let apellido1 = "Hurtado";

let saludo1 = "Hola mi nombre es" + " " + nombre1 + " "+ apellido1 + "."
console.log(saludo1);

// interpolacion de variables

let saludo3 = `Hola mi nombre es, ${nombre}`;  // `` el acento invertido son los que me funciona para concatenar porque con doble comillas y comillas simple el texto tiene que estar unid0
let saludo2 = `Hola mi nombre es, ${nombre1} ${apellido1}.`;
console.log(saludo2);

    
    //-----------//
   // *Numeros* //
  //----------//

  // Tipos de Datos "numeros"

  let a = 2;
  let b = new Number(1);
  let c = 7.19;
  let d ="5.6"; // ahora es una cadena de texto porque está entre comillas

  console.log(a,b);
  console.log(c.toFixed(1)); // redondea el # a un lugar despues de la coma y así sucesivamente
  console.log(parseInt(c)); // me devuelve sola la parte entera
  console.log(parseFloat(c)); // me impirme la parte entera más los decimales
  console.log("Es un",typeof c,"y un", typeof d); // nos dice que tipos de datos es 
  console.log(a + b); // operacion aritmética
  console.log(c + parseInt(d)); // d es un string y lo covierto a # poder hacer la operacion, de lo contraterio se estaría concatenando
  // el parseInt sólo sumó la parte entera
  console.log(c + parseFloat(d)); // se convierte el string y cómo es con parse flota suma la parte entera y los decimales
  console.log(c + Number.parseFloat(d)); // tambié se puede nombrar así y obtengo el mismo resultado con el constructor 

   
    //-----------------------------//
   // *Tipos de datos booleanos* // 
  //----------------------------//

  // Tipos de datos booleanos   
  // Los valores booleaneas son true o false
  // Hay valores que no son ni verdadero ni falso pero tienden a ser true o false

  // Ejemplos
  let bandera = true;
  let bandera2 = new Boolean(false);
  console.log(bandera, bandera2);
  console.log("Es un",typeof bandera,"y un", typeof bandera2);

  // Todos los valores que tienden a verdadero son true
 
  if (true);
  if (1);
  if ("true");  
  if (1>0);
  if (1<0);

  // Todos los valores que tienden a falso son false
  if (false);
  if (0);
  if ("false");  
  if (1<0);
  if (1>0);

  console.log(
    true && true, // true
    true && false, // false
    false && true, // false
    false && false, // false
    true || true, // true
    true || false, // true
    false || true, // true
    false || false, // false
  );


    //-------------------------------------- //
   // *Tipos de datos undefined, null, NaN* // 
  //---------------------------------------//

  let indefinida; // para javascript es undefined una variable sin valor
  console.log(indefinida);

// para javascript es null una variable vacia pero intencionalmente se le ha asignado un valor null
// null es un valor especial que indica la ausencia de un valor
   
  let nulo = null; 
  console.log(nulo);

  // NaN = Not a Number
 // me indica que no es un numero

let noEsUnNumero = "hola" *3.7;
console.log(noEsUnNumero); // NaN

   
//* Datos compuestos*//

    //------------ //
   // *Funciones* // 
  //-------------//

  /* 
  Una funcion es un bloque de código autocontenido, que se puede definir una vez y ejecutar
  en cualquier momento.
  
  Opcionalmente, una puede aceptar parámetros y retornar un valor.
  
  Las fuunciones en javascript son objetos, un tipo especial de objetos:
  
  Se dice que las funciones son ciudadanos de primera clase porque pueden asignarse a un valor, y pueden
  pasarse cómo argumentos y usarse cómo un valor de retorno
*/

 // tenermos dos maneras de declarar una funcion funciones declarativas y expresiones

 // Funciones declarativas
 function estoEsUnaFuncion()
 {
   console.log("uno");
   console.log("dos");
   console.log("tres");
 };
 
 // Para que la función se ejecute es necesario llamarla
 estoEsUnaFuncion();

 function unaFuncionQueDevuelveUnValor()
 {
   return "Hola mundo";  // return me permite devolver un valor
 }
 console.log(unaFuncionQueDevuelveUnValor()); // se ejecuta dentro del console.log

 let valor = unaFuncionQueDevuelveUnValor();      // se ejecuta la funcion llamandola cómo variable
 console.log("El valor de la variable es", valor);

 // cuando el compilador encuentra el return ignora el restos del código y termina la ejecución de la función

 function saludar(nombre,edad) // nombre y edad son los argumentos que recibe la funcion
 {
   console.log(`Hola mi nombre es ${nombre}, y tengo  ${edad} años.`);
 }

 saludar("Florencio",28); // se envian los argumentos
 saludar(); // no se envian argumentos y devuelve un undefined

 function saludar1(nombre = "Default",edad = 0) // nombre y edad son los argumentos que recibe la funcion
 {
   console.log(`Hola mi nombre es ${nombre}, y tengo  ${edad} años.`);
 }

 saludar1(); // se envian los argumentos que definimos por defecto en la funcion

 // funciones declaradas vs funciones expresadas
 //*Funciones declaradas*//

 function funcionDeclarada()
 {
    console.log(`Esto es una funcion declarada, puede invocarse en cualquier 
    parte de nuestro programa, incluso antes de que la funcion sea declarada 
    o ejecutada.parte de nuestro programa `); 
 }

 // si invoco a la funcion antes del bloque de codigo y despues se ejecuta la funcion dos veces.
// Esto sucede cons las funciones declaradas

 funcionDeclarada(); 

 //*Funciones expresadas*//
// Funcion anonima

 // funcionExpresada(); // si la invocamos antes del bloque de codigo no se ejecuta la funcion, me da error

 const funcionExpresada = function() // la funcion expresada se le asigna a una variable
 {
    console.log(`Esto es una funcion expresada, es decir, una funcion que se le ha
    asignado cómo valor a una variable, si invocamos esta función antes de su definición
    JS nos dirá...... `); 
 }

 funcionExpresada();

 
    //-------------//
   //  *Arrays*   // 
  //-------------//

  const ab = []; // ab es un array vacio
  const cd = [1,2,3,4,5,6,7,8,9,10]; // cd es un array con valores numericos
  const ed = [1, true, "hola",[1,2,3]]; // ed es un array con valores compuestos, // la consola me muestra el # de ekementos del array

  console.log(ab,cd,ed); // la consola me muestra el # de ekementos del array
  console.log(ed[2]); // los arreglos empiezan a contabilizar en 0, en este caso imprime hola que es el tercer elemento
  console.log(ed[3][0]); // imprime el primer elemento del segundo array despues del 3 elemento del 1er array

// otra manera de declarar un array

const ce = Array.of("x", "y", "z", 1,2,3); //aqui estaba accediendiendo a prototipo array de javascript
console.log(ce);

const vb = Array(10).fill(0); // crea un array de 10 elementos con valor 0
console.log(vb);

// los arreglos tienen metodos

const colores1 = ["rojo", "azul", "verde"];
console.log(colores1);

colores1.push("amarillo"); // .push agrega un elemento al final
console.log(colores1);

colores1.pop(); // .pop elimina el elemento al final
console.log(colores1);


// los elemnetos que defino en la funcion empiezan por los valores del arreglo y luego por el indice//

colores1.forEach(function(el, index) { // .forEach recorre todos los elementos del array e index es el indice del array
  console.log(`<li id="${index}">${el} </li>`); // el es el elemento y el index es el indice y así sabemos la posicion que tiene el elemento 
});


    //-------------//
   //  *Objetos*  // 
  //-------------//

  // un objeto puede tener entre llaves cualquier tipo de datos incluso una función

  const persona = {
    nombre: "Yahily",
    edad: 25
  };
  console.log(persona);

/* Dentro de un objeto a las variables se le van a llamar atributos/propiedades
y a las funciones se le llaman metodos. */


  const Florencio = {
  nombre: "Florencio",
  apellido: "Hurtado",
  edad: 28,
  pasatiempos: ["Programar", "escribir", "leer"],
  casado: true,
  contacto: {
    email: "Hgk6c@example.com",
    twitter: "@florenciohurtado",
    movil: "123456789",
  },
  saludar: function() {
    console.log("Hola, mi nombre es Florencio Hurtado");
  },
  decirMiNombre: function() {
    console.log(`Mi nombre es ${this.nombre} ${this.apellido}
    y tengo ${this.edad} años`); // this hace referencia al objeto
  }
};

console.log(Florencio);

console.log(Florencio["nombre"]); // accede solo al nombre
console.log(Florencio.edad); // accede solo a la edad este metodo es mas recomendado 
console.log(Florencio.pasatiempos);
console.log(Florencio.pasatiempos[2]); // me impirme el tercer valor del arry pasatiempos
console.log(Florencio.casado); // me imprime el valor de la variable casado en este caso es true

console.log(Florencio.contacto); // me imprime todo el objeto
console.log(Florencio.contacto.twitter); // me imprime solo el twitter dentro del objeto contacto
console.log(Florencio.contacto.movil); // me imprime solo el movil dentro del objeto contacto
Florencio.saludar(); // Esto llamará al método saludar y mostrará el mensaje en la consola
Florencio.decirMiNombre(); // Esto llamará al método decirMiNombre y mostrará el mensaje en la consola

console.log(Object.keys(Florencio)); // me imprime las llaves {} del objeto
console.log(Object.values(Florencio)); // me imprime los valores del objeto
console.log(Florencio.hasOwnProperty("contacto")); // me imprime true si el objeto tiene la llave contacto esta dentro de las llaves del objeto
 

    //------------------------//
   //  *Operadores Lógicos*  // 
  //------------------------//

  //Arithmeticos + - * / %

  let a9 = 10+10-5;
  let modulo = 10%3; // devuelve el residuo sin contar la parte fraccionaria

  console.log(a9);
  console.log(modulo);

  // Operadores relacionales > < >= <= == === != !== */

  console.log(8<9); // true
  console.log(8>9); // false
  console.log(8>=9); // false
  console.log(8<=9); // true
  console.log(8==9); // false
  console.log(8===9); // false
  console.log(8!=9); // true
  console.log(8!==9); // true

  /*
  = 1 igual es asignacion de variable
  == 2 igual es comparacion de valores
  === 3 igual es comparacion de valores y tipo de variable
  */  

  // Incremento y Decremento

  let i = 1;
  console.log(i++); // 1
  console.log(++i); // 3

  //i = i + 2;
  i += 2; // es igual a i = i + 2, tambié se puede usar -=, *=, /=, %=

// Operador unario

  i++; // es igual a i = i + 1, es mejor usar esta manera.
  i--; // es igual a i = i - 1

  console.log(i);

  // Operadores Logicos
  /*
  !-- NOT : Niega, lo que es verdadero lo convierte en falso y viceversa.
  
  &&- AND : Cuando tengo 2 o mas condiciones todas tienen que ser verdaderas 
            para que el resultado sea verdadero y viceversa si uno es falso devuelve falso.
  
            ||- OR  : Cuando tengo 2 o mas condiciones , con que uno sea verdadero y el otro falso devuelve 
                      verdadero y viceversa.
  */

  console.log(!false); // true
  console.log(!true); // false
  console.log((8===8) || ("8"===8) || ("8"===9)); // true
  console.log((8===8) && ("8"===8) && ("8"===9)); // false


    //---------------------//
   //   *Condicionales*   // 
  //---------------------//

  /* if-else:  Se utiliza para manejar dos condiciones. 
  Evaluas una condición con if, y si no se cumple, puedes
   manejar el caso opuesto con else.*/   

  let edad = 19;
  
  if (edad >= 18) {
    console.log("Es mayor de edad");
  } else {
    console.log("Es menor de edad");
  }

/* if-else if-else : Se utiliza para manejar más de dos condiciones.
 Comienzas con if para la primera condición, luego usas else if para 
 cada condición adicional que quieras evaluar, y finalmente puedes usar 
 else para manejar cualquier caso que no coincida con las condiciones anteriores.*/  
/*

/* Así, if-else es ideal para decisiones simples con dos posibles caminos,
 mientras que if-else if-else es mejor para decisiones más complejas que 
 involucran múltiples posibilidades. */

 /*
Déjame dormir - 0hrs - 5hrs
Buenos dias 6hrs - 11hrs
Buenas tardes 12hrs - 18hrs
Buenas noches 19hrs - 23hrs
*/

  let hora = 19;  // si uso los operadores simples de comparacion tengo que modificar la hora

  if (hora >= 0 && hora <= 5) {
    console.log("Dejame dormir");
  } else if (hora >= 6 && hora <= 11) { 
    console.log("Buenos dias");
  } else if (hora >= 12 && hora <= 18) {
    console.log("Buenas tardes");
  } else {
    console.log("Buenas noches");
  }

  if(hora < 6) {
    console.log("Dejame dormir");
  }else if(hora > 5 && hora < 12){
    console.log("Buenos dias");
  }else if(hora > 11 && hora < 19){
    console.log("Buenas tardes");
  }else{
    console.log("Buenas noches");
  }

/* Operadores Ternarios (condicion ? verdadero : falso)*/ // solo se puede usar en una sola linea de codigo
console.log("Operadores Ternario");
let eresMayor = (edad >= 18) 
? "Es mayor de edad" 
: "Es menor de edad";
console.log(eresMayor);

/* switch-case : Se utiliza para manejar multiples casos. */
/*
domoingo -0
lunes -1
martes -2
miercoles -3
jueves -4
viernes -5
sabado -6
*/
let dia = 10;
switch (dia) {
  case 0:
    console.log("domingo");
    break;
  case 1:
    console.log("lunes");
    break;
  case 2:
    console.log("martes");
    break;
  case 3:
    console.log("miercoles");
    break;
  case 4:
    console.log("jueves");
    break;
  case 5:
    console.log("viernes");
    break;
  case 6:
    console.log("sabado");
    break;
  default:
    console.log("No existe");
    break;}

    //-------------//
   //   *Ciclos*  // 
  //-------------//

  // while: siempre va a comparar la condición y va a iterar hasta que se cumpla la condición

  let contador = 0;
  
  /*
  while (contador < 10) {
    console.log("while", contador);
    contador++; // es lo mismo que contador = contador + 1 me va a imprmir mientras que 0 sea menor a 10
  }


  // do while: se ejecuta una vez todo el codigo y luego se compara la condición
  do{
    console.log("do while",contador);
    contador++;
  }while(contador < 10);
  */

  
  // for:

  /* for (declaracion; inicializacion de la variable; condicion; incremento o decremento) {
  se ejecuta el bloque de instrucciones
  } */

  for (let i = 0; i < 10; i++) {
    console.log("for", i);
  }

  let numero = [10, 20, 30, 40, 50,60, 70, 80, 90, 100];

  // i es el numero de posiciones
  for (let i = 0; i < numero.length; i++) { // el i++ es para que el i recorra todas las posiciones hasta que se deje de cumplir la condición
    console.log(numero[i]);  // lo que imprime es el valor de la posicion de i en el arreglo hasta que se deje de cuumplir la condición
  }

  // for in: es más para objetos primitivos
  const persona2 = {
    nombre: "Florencio",
    apellido: "Hurtado",
    edad: 25
  }

  for(const propiedad in persona2) {
    console.log(`key: ${propiedad} - value: ${persona2[propiedad]}` );
  }

  // for of: es más para arreglos y objetos iterables

  for(const elemento of numero) {
    console.log(elemento);
  }

  let cadena = "hola";
  for(const letra of cadena) { // recorre cada letra de la variable cadena
    console.log(letra); // entonce me impirme cada letra
  }

    //------------------------//
   //   *Manejo de errores*  // 
  //------------------------//

  // ejemplo sin error
  try {
    console.log("En el try se agrega el código a evaluar");
  } catch (error) { // si no existe un error en el try no se ejecuta el catch y viceversa
    console.log("catch captura cualquier error que se genere en el try");
  } finally {
    console.log("El finally se ejecutara siempre al final de un bloque try-catch");
  }

  // ejemplo con error
  console.log("Ejemplo con error");
  try {
    console.log("En el try se agrega el código a evaluar");
    noExiste; // cuando captura el error va directamente al catch
    console.log("Esto no se va a ejecutar");
  } catch (error) {
    console.log("catch captura cualquier error que se genere en el try");
    console.log(error);
  } finally {
    console.log("El finally se ejecutara siempre al final de un bloque try-catch");
  }

  // ejemplo con error personalizado
  console.log("Ejemplo con error personalizado");
  try {
    let numero = "y";
    
    if(isNaN(numero)){                      
      throw new Error("El caracter introducido no es un numero");  // isNan me dice si es un numero o no
  }
 
  console.log(numero * 10);
} catch (error) {
  console.log(`Se produjo el siguiente error: ${error}`);
}

    
    //-------------------------//
   //   *Break and Continue*  // 
  //-------------------------//

  // break: detiene la ejecucion del bucle 
  console.log("break");

  const numeros10 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  for (let i = 0; i < numeros10.length; i++) {
    if (i === 5) {
      break; // detiene la ejecucion del bucle for
    }
    console.log(numeros10[i]);
  }

  // continue: salta la iteracion del bucle
  console.log("continue");

  
  for (let i = 0; i < numeros10.length; i++) {
    if (i === 5) {
      continue; //  salta la iteracion y continua la ejecucion del bucle for 
    }
    console.log(numeros10[i]);
  }

    
    //-------------------------//
   //   *Desestructuracion*   // 
  //-------------------------//
  