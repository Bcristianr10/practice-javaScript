/*
Apuntes de ECMASCRIPT 6

1. Decclarar variables

   En ES6, hay 3 formas principales de declarar variables:
   - var: La forma tradicional de declarar variables. Sólo puede ser declarada dentro de una función y es global en el alcance de la función.
   - let: Se introdujo en ES6 y permite la declaración de variables dentro de bloques. Permite la reasignación de valores.
   - const: Se introdujo en ES6 y permite la declaración de constantes. Las constantes no pueden ser reasignadas, pero se puede cambiar su valor.

2. Template String

   En ES6, los "template strings" se pueden usar para construir cadenas de caracteres de una manera más fácil y más legible. Los template strings se delimitan con comillas invertidas (`) y se pueden incrustar variables o expresiones utilizando la sintaxis ${}.

   Por ejemplo, para interpolar la variable 'nombre' en una cadena de texto, podemos hacer lo siguiente:
   */
let nombre = 'Mario';
console.log(`Hola ${nombre}`); // Imprime: Hola Mario
/*

3. Funciones de Tipo Flecha   
   Son funciones que se pueden definir utilizando el símbolo "=>" y no requieren la palabra clave function.
   La función flecha tiene las siguientes características:
   - No tienen this, por lo que this apunta al objeto global (window).
   - No tienen su propia this, por lo que this hereda del contexto donde fue llamada.
   - Pueden ser asignadas a variables normales o a otros tipos de valores como arrays u objectos.
   Ejemplo:
*/
let suma = (x, y) => x + y;
console.log(suma(5, 4)); // Devuelve 9
/*

4. Destructuracion de Arreglos
   La destructuración de arreglos en JavaScript nos permite extraer valores de arreglos y asignarlos a variables.
   Permite extraer los elementos de un arreglo y asignarles a variables individuales.
   Ejemplo:
*/
let numeros = [0, 1, 2, 3];
let [n1, n2, n3] = numeros;
const suma2 = ([n1, n2, n3]) => {
   return n1 + n2 + n3;
};

console.log(suma2(numeros)); // Devuelve 6
/*

5. Destructuracion de Objetos
   Es similar a la anterior pero se utiliza con objetos en lugar de arreglos.
   Ejemplo:
*/
let persona = {
   nombre: 'Juan',
   edad: 28,
   ciudad: 'Bogota'
};
let { nombreP, edad } = persona;

const imprimirPersona = ({ nombreP, edad }) => {
   console.log(`Nombre: ${nombreP}`);
   console.log(`Edad: ${edad}`);
};

imprimirPersona(persona);
/*

6. Clases
   Las clases son una nueva forma de crear objetos en JavaScript, introducidas en ECMAScript 6.
   Estas permiten crear constructores y métodos para agrupar propiedades y comportamientos relacionados.
   Para crear una clase en JS podemos hacerlo de dos maneras:
   - Con la keyword class seguido del nombre de la clase entre llaves {}
   En este caso, el constructor es implicito y se llama igual que la clase.
   javascript
*/
class Usuario {
   constructor(nombre, edad) {
      this.nombre = nombre;
      this.edad = edad;
      //las que son this se le llaman propiedades de la clase y no variable de la clase
   }
   // Cuando una function esta dentro de una clase se le llama metodo
   mostrarSaludo() {
      return `Hola soy ${this.nombre} y tengo ${this.edad} años`;
   }

   mostrarInfo() {
      return `Nombre: ${this.nombre}, edad: ${this.edad}`;
   }
}
const carlos = new Usuario('Carlos', 23); // Esto es una instancia
console.log(`${carlos.nombre} tiene ${carlos.edad} anios`);
console.log(carlos.mostrarSaludo());
console.log(carlos.mostrarInfo());
/*
7. Herencia
   La herencia permite crear nuevas clases basadas en existentes.
   Para lograr esto en JavaScript utilizamos la palabra reservada extends seguida del nombre de la clase base entre paréntesis.
*/
class Estudiante extends Usuario {
   constructor(nombre, edad, curso) {
      super(nombre, edad); // Llamada al constructor de la clase padre (Usuario).
      this.curso = curso;
   }
   // Sobreescribimos el metodo mostrarInfo
   mostrarInfo(){
      return `Nombre: ${this.nombre}, Edad: ${this.edad}, Curso: ${this.curso}`;
   }
}
const alejandro = new Estudiante('Alejandro', 18, 'Desarrollo de Software'); // Esto es una instancia
console.log(alejandro.mostrarInfo());
/*

8. Operador Rest
   El operador rest se utiliza para indicar que los parámetros siguientes van a ser un número indefinido de argumentos.
   El operador rest se utiliza para obtener todos los argumentos excepto el primero.
   Se usa con funciones o metodos que reciben un numero indefinido de parametros.
   Por ejemplo, si tenemos una función que recibe cualquier cantidad de numeros pero queremos guardar solo los ultimos
   Ejemplo:
   function miFuncion(...args){...}
   */
function suma3(...numeros) {
   let acumulador = 0;
   for (let num of numeros) {
      acumulador += num;
   }
   return acumulador;
}
console.log(`Operador Rest ${suma3(1, 2, 3)}`);
      /*
9. Operador Spread
 El operador spread se utiliza para expandir un array en varios argumentos.
 Se usa con arrays u objetos.
 Ejemplo:
*/
const numeros_sumar = [1,2,3]
console.log(`Operador Spread ${suma3(...numeros_sumar)}`);
/*
Conclusion: Basicamente el operador rest se utiliza para recibir los parametros (principalmente en funciones) y spread es lo contratio, es para enviar a una funcion

10. Promesas
Son una forma de trabajar asincronicamente en JavaScript.
Las promesas nos permiten manejar resultados y errores de manera sencilla.
*/
// Creando una promesa, Codigo de BlackBox
const miPromesa = new Promise((resolve, reject) => {
   setTimeout(()=>{
      reject("La tarea terminó");
   }, 2000);
});
// Resolviendo la promesa
miPromesa
.then(resultado => console.log(`El resultado de la promesa es ${resultado}`))
// Manejando errores
.catch(error => console.log(`Ha ocurrido un error ${error}`));
/*
Tutorial
*/
const promesa = new Promise((resolve, reject)=>{
   setTimeout(()=>{
      const exito = false;
      if (exito) {
         resolve('exito');
      } else {
         reject('no existo');
      }
   },4000);
});
promesa.then((message)=>{
   console.log(message);
})
.catch((error)=>{
   console.log(error);
});

/*

*/

// dame un ejemplo de la destructuracion de arreglo en javascript en una funcion tipo flecha y me comenta el codigo ?