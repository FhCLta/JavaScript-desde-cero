    //------------------//
   // *Objeto Console* //
  //------------------//

  console.log(console);
  console.error("Esto es un error");
  console.warn("Esto es un aviso");
  console.info('mensaje informativo');
  console.log('es un registro de lo que ha pasado en nuestra consola');

 let nombre = "Florencio",
    apellido = "Hurtado",
    edad = 28;
console.log(nombre);
console.log(apellido);
console.log(edad);
console.log(nombre,apellido,edad);
console.log(`Hola mi nombre es ${nombre} ${apellido} y tengo ${edad} años`);

console.clear(); // limpia toda la consola
console.log(window); // el windows es el objeto global de javascript en los navegadores
console.log(document); // el document es la representacion del documento html a traves de javascript
console.dir(window);
console.dir(document);
console.clear();

console.group('Los cursos de Youtube') // inicia el grupo
console.log('Ict');
console.log('Kmanus');
console.log('Jon Mircha');
console.groupEnd(); // finaliza el grupo

console.groupCollapsed('Los cursos de Youtube') // inicia el grupo
console.log('Ict');
console.log('Kmanus');
console.log('Jon Mircha');
console.groupEnd(); // finaliza el grupo

console.log(console);
console.table(Object.entries(console).sort());

const numeros = [1,2,3,4,5],
      vocales = ["a","b","c","d","e"];

console.table(numeros,vocales);    
console.table(vocales);  

const perro = {
    nombre: "Boni",
    raza: "Boxer",
    color: "azul"
}
console.table(perro);
console.clear();

console.time('Cuanto tiempo tarda mi codigo')
const arreglo = Array(10);

for(let i = 0; i<arreglo.length; i++){
    arreglo[i] = i;
}
console.timeEnd('Cuanto tiempo tarda mi codigo');
console.log(arreglo);

for(let i = 0; i <= 10; i++){
    console.log(i);
    console.count("codigo for"); // revisa uno por uno el codigo   
}

let x = 1,
    y = 2;
pruebaXY = "Se espera que X siempre sea menor que Y ";

console.log(x<y,{x,y,pruebaXY});
console.assert(x<y,{x,y,pruebaXY}); // solo se ejcuta cuando es falso y me envia un error en la console
console.clear();

 

    //------------------//
   //   *Objeto Date*  //
  //------------------//

  console.log(Date());

  let fecha = new Date();
  console.log(fecha);
  console.log(fecha.getDate()); // día del mes
  console.log(fecha.getDay()); // día de la semana D L M Mi J V S -> 0 1 2 3 4 5 6
  console.log(fecha.getMonth()); // Mes  Ene Feb Mar Abr Jun Jul Ago Sep -> 1 2 3 4 5 6 7 8 9  
  console.log(fecha.getYear()); // considera a partir de 1900 cuantos años ha pasado
  console.log(fecha.getFullYear()); // obtener el año actual
  console.log(fecha.getHours()); // obtener la hora en formato militar
  console.log(fecha.getMinutes()); // obtener los minutos
  console.log(fecha.getSeconds()); // obtener los segundos
  console.log(fecha.getMilliseconds()); // obtener los milisegundos
  console.log(fecha.toString()); // me da lo mismo que el objeto Date
  console.log(fecha.toDateString()); //  me da el día el mes y el año
  console.log(fecha.toLocaleString()); // me da la fecha y la hora actual en mi hora local
  console.log(fecha.toLocaleDateString()); 
  console.log(fecha.toLocaleTimeString());
  console.log(fecha.getTimezoneOffset()); // está a 300 minutos de las 00:00 serían 5 horas
  console.log(fecha.getUTCDate());
  console.log(fecha.getUTCHours());
  console.log(Date.now());
  
  // moment.js libreria para utilizar los horarios
  let cumpleFlorencio = new Date(1995,8,14);
  console.log(cumpleFlorencio);
  console.clear();
  

    //------------------//
   //  *Obteto-Math*   //
  //------------------//

  console.log(Math);
  console.log(Math.PI);
  console.log(Math.abs(7.8)); // me devuelve el valor absoluto
  console.log(Math.ceil(7.2)); // siempre redondea al numero entero mayor
  console.log(Math.floor(7.8)); // seimpre redondeo al numero entero menor
  console.log(Math.round(7.4)); // redondeo cómo es 
  console.log(Math.sqrt(16)); // es la raiz cuadrada
  console.log(Math.pow(2,5)); // esto elevando a la potencia, el primer # es el entero y el segundo el exponente
  console.log(Math.sign(-7.8));// siempre va a devolver si el # es negativo positivo o 0 indentidicandolo con -1 0 1
  console.log(Math.random()); // seimpre va a dar un # aleatorio entre 0 y 1
  console.log(Math.random() * 1000);
  console.log(Math.round(Math.random() * 1000)); 
 console.clear();
 
    //--------------------------------//
   //   *Operador de Cortocircuito*  //
  //--------------------------------//
  
  /* Cortocircuito con Or - cuando el valor de la izquierda en la expresion siempre pueda validar a true, es 
     es el valor que se cargará por defecto.
     Cortocircuito AND - cuando el valor de la izquierda en la expresión siempre pueda validar a false, es el valor
     que se cargará por defecto.
  */

  function saludar(nombre){
     nombre = nombre || "Desconocido" // este es un operador cortocircuito, si no viene nombre imprimo desconocido
     console.log(`Hola ${nombre}`);
    
  }
  console.log('cadena' || 'valor de la derecha' ); // aplica el valor de la ezquierda cuando es verdadero
  console.log(false || 'valor de la derecha' ); // aplica el valor de la derecha cuando es falso
  saludar('Florencio');
  saludar();

  // corto circuito con &&
  console.log('cadena' && 'valor de la derecha' ); // aplica el valor de la derecha cuando es verdadero el valor de la izquierda
  console.log(false && 'valor de la derecha' );  // aplica el valor de la izquierda cuando es falso el valor de la izquierda

   
    //--------------------------------//
   //   *Alert, confirm prompt*      //
  //--------------------------------//

  // sólo existen en los navegadores no funcionan en nodejs

 // console.log(window);
 // alert('hola esto es una alerta'); // el alert sólo tiene la opcion de acepta
 // confirm('Hola esto es una confirmación'); // el confirm tiene la opcion de aceptar y cancelar
 // prompt('hola esto es un prompt') // le permite la usuario ingresar un valor

 // let alerta = alert("Hola esto es una alerta"),
 // confirmación = confirm('Hola esto es una confirmacion')
 // aviso = prompt('Hola esto es un aviso y le permite al usuario ingresar un valor');
 
//  console.log(alerta);
// console.log(confirmación);
// console.log(aviso);
  
    //--------------------------------//
   //   *Expresiones Regulares*      //
  //--------------------------------//
 
 /* Expresiones Regulares
   Son una secuencia de caracteres que forma un patrón de búsqueda, principalmente utilizada
   para la búsqueda , principalmente utilizada para búsqueda de patrones de cadenas de caracteres.
 */

 let cadena = `Lorem ipsum dolor sit amet consectetur adipisicing elit
   Alias deserunt nulla, atque labore recusandae, iste doloremque molestiae
   est ad illo consectetur! Nihil optio corporis culpa dolores deserunt dolorem eligendi quis`
    
 let expReg = new RegExp("lorem","");
 let RegExp2 = /lorem/;
 let RegExp3 = /lorem/ig;
 
 console.log(expReg.test(cadena)); // devuelve un boolean
 console.log(expReg.exec(cadena)); // devuevle un array
 console.clear();

    //------------------------------//
   //   *Funciones anónimas*       //
  //------------------------------// 

   // funcion anónima Autoejecutable
  // funcion anónima aquí siempre debemos usar ;
 (function(){
   console.log("Mi primer IIFe");
   
 })(); 
 (function(d,w,c){
    console.log("Mi segundo IIFe");
    console.log(d);
    console.log(w);
    c.log('Esto es un console.log')
    
    
  })(document,window,console);  // document está dentro de d, windows es w y console es C

// Formas  de escribir las funciones anónimas autoejecutables
// Clásica
(function(){
    console.log('Version Clasica');
    
})();

// La crockford
((function(){
    console.log('Version crockford');
    
})());

// Unaria
+function(){
  console.log('Version Unaria');
}();

// Facebook
!function(){
    console.log('Version Facebook')
}();

    

 
 
 
  
  
  

  
  
  
  
  
  
  
  
  
  
  
  
  








    
    
