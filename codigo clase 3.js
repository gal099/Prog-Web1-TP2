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


class Persona {
  nombre = '';

  decirNombre() {
    console.log('Mi nombre es', this.nombre);
  }
}

const miPersona = new Persona();
miPersona.nombre = 'Leo';

const estudiante = new Persona();
estudiante.nombre = 'Ana';


  imprimir (estudiante.nombre + ' no exportó la función Imprimir')