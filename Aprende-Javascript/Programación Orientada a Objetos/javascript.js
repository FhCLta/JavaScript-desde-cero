  //---------------//
 // *Prpototipos* //
//---------------//

// POO (Programación Orientada a Objetos)
/*
Clases - Modelo a seguir
Objetos - instancias de una clase
Atributos - es una caracteristica o propiedad del objeto (son variables dentro de un objeto )
Métodos - son las acciones que puede realizar el objeto
*/

//  es un ejmplo sin generación de prototipos



const animal ={
     nombre: 'perro',
     sonar(){
         console.log('Hago sonido porque estoy vivo ');
     }
 }

 console.log(animal);

 const animal1 ={
    nombre: 'perro',
    sonar(){
        console.log('Hago sonido porque estoy vivo ');
    }
}

console.log(animal1);



// Funcion constructora

function Animal(nombre,genero){
   
   // Atributos 
   this.nombre = nombre;        // va a ser igual a lo  el usuario me pase en nombre
   this.genero = genero;
   
   // Metodos
   this.sonar = function(){
       console.log('Hago sonido porque estoy vivo ');
   }
   this.saludar = function(){
       console.log('Hola soy ' + this.nombre);
   }
}

const snoppy = new Animal('snoppy','macho'),
lolaBunny = new Animal('lolaBunny','hembra');

console.log(snoppy);
console.log(lolaBunny);

snoppy.sonar();
lolaBunny.saludar();


 // Funcion constructora donde asignamos los metodos al prototipo no a la funcion constructora
// Me ahorra espacio en la memoria

function Animal1(nombre1,genero1){
   
    // Atributos 
    this.nombre = nombre1;        // va a ser igual a lo  el usuario me pase en nombre
    this.genero = genero1;
    
   
 }
 
 // Metodos agregados al prototipo al prototipo de la funcion constructora

 console.log("Funcion constructora donde asignamos los metodos al prototipo no a la funcion constructora");
 Animal1.prototype.sonar = function(){
    console.log('Hago sonido porque estoy vivo ');
}
Animal1.prototype.saludar = function(){
    console.log('Hola soy ' + this.nombre);
}


 const snoppy1 = new Animal1('snoppy','macho'),
 lolaBunny1 = new Animal1('lolaBunny','hembra');
 
 console.log(snoppy1);
 console.log(lolaBunny1);
 
 snoppy1.sonar();
 lolaBunny1.saludar();
 