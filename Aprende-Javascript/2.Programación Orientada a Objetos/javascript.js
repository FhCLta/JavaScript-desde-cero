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

   //------------------------//
  // *Herencia Prototipica* // // Esta fue la manera para ver cómo funciona javascript aunque trabajaremos con las clases
 //------------------------//
 function Perro(nombre,genero,tamanio){
    this.super = Animal1;
    this.super(nombre,genero);
    this.tamanio = tamanio;

 }

 // Perro está heredando de Animal1
 Perro.prototype = new Animal1(); 
 Perro.prototype.constructor = Perro; // perro puede utilizar los métodos heredados de animal1

 // Sobreescritura de nétodos del Prototipo padre en el hijo
 Perro.prototype.sonar = function(){
    console.log("Soy un perro y mi sonido es ladrar");
 }

 Perro.prototype.ladrar = function(){
    console.log("guau guau");
 }

 const snoppy1 = new Animal1('snoppy','macho');
 const snoppy2 = new Perro('snoppy','macho','mediano'),
 lolaBunny1 = new Animal1('lolaBunny','hembra');
 
 console.log(snoppy1);
 console.log(snoppy2);
 console.log(lolaBunny1);
 
 snoppy1.sonar();
 snoppy2.sonar();
 snoppy2.ladrar();
 lolaBunny1.saludar();

   //--------------------//
  // *Clase y herencia* //
 //--------------------//
 
  // las clases nos simplifican la excritura
    class Animal5{
        constructor(nombre,genero){
        this.nombre = nombre;
        this.genero = genero;
    }
        
    // Metodos
    sonar (){
        console.log('Hago sonido porque estoy vivo ');
    }
    saludar(){
        console.log('Hola soy ' + this.nombre);
    }
 }

 // es para que gato me herede animal para eso se usa class y extends
 //  con el metodo super() se manda a llamar el constructor de la clase padre
   class Gato extends Animal5{
    constructor(nombre,genero,tamaio){
  
    super(nombre,genero);
    this.tamanio = this.tamanio;
    this.raza = null;
  }
  sonar(){
    console.log("Soy un gato y mauyo");
  }
  saludar(){
    console.log('Hola soy misu');
  }
   
  //un metodo estático se puede ejecutar sin necesida de instanciar una clase
  static queEres(){
    console.log('Los gatos tienen 7 vidas');
  }
     /* Los setters y getters son métodos especiales que nos permiten establecer 
       y obtener valores de atributos de nuestra clase */
    
    get getRaza(){
        return this.raza;
    }   
    set setRaza(raza){
        this.raza = raza;
    }
 
 }

 Gato.queEres();

 const mimi = new Animal5('Mimi','Hembra'),
       misu = new Gato('Misu','Macho','Grande')


 console.log(mimi);
 mimi.sonar();
 mimi.saludar();

 console.log(misu);
 misu.sonar();
 misu.saludar();
 console.log(misu.getRaza); // hay que ejecutarlo como si fuera un atributo y no un metodo
 misu.setRaza = "Siames";
 console.log(misu.getRaza);


  




 
 
  



