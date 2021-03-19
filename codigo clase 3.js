'use strict';

// const perro = {
//     caminando: false,
//     caminar() {
//       this.caminando = true;
//     },
//     parar() {
//       this.caminando = false;
//     }
//   }
  
// let timer = setInterval(() => {
//     console.info(`Perro caminando?`, perro.caminando);
// }, 1000);


// class Persona {
//   nombre = '';

//   decirNombre() {
//     console.log('Mi nombre es', this.nombre);
//   }
// }

// const miPersona = new Persona();
// miPersona.nombre = 'Leo';

// const estudiante = new Persona();
// estudiante.nombre = 'Ana';


class Persona {
  nombre = '';
  constructor(miNombre) {
    this.nombre = miNombre
  }

  decirNombre() {
    console.log('Mi nombre es', this.nombre);
  }
}

const miPersona = new Persona('Leo');

const estudiante = new Persona('Ana');



  imprimir (estudiante.nombre + ' no importó la función Imprimir en el archivo "codigo calse 3.js".- 🙃')

  