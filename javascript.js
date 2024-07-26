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