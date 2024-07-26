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
 