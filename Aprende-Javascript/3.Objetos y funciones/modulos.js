    //-------------------------------//
   //   *Módulos impory y exports*  //
  //-------------------------------// 
 
  import{PI,usuario,Saludar}from "./constantes.js"; // entre las llaver pongo la variable y luego from para acceder a la ubicacion del archivo
  import{aritmetica} from "./aritmetica.js"
  import saludar from "./constantes.js";

  // import{aritmetica as calculo} from "./aritmetica.js"  es para sustituir el nombre de aritmetica por calculo
  
  console.log(PI);
  console.log(usuario);
  console.log(aritmetica.sumar(3,4));
  saludar();
 console.log(Saludar);

 let saludo = new Saludar(); // declaro una variable para ejecutar lo que hay dentro de las clases
 saludo;
  
  
  console.log('Archivo de Modulos');
  