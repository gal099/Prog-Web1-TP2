`use strict`;

function imprimir(...variables) {
  // Imprimo por consola:
  console.info(...variables);

  // Obtengo el contenedor para la consola buscando
  // el elemento con ID "consola-html" (en el index.html):
  const consola = document.getElementById('consola-html');

  // Creo elemento HTML <hr> para mostrar una línea de
  // separación:
  consola.appendChild(document.createElement('hr'));

  // Creo elemento HTML <pre>:
  const linea = document.createElement('pre');

  // Uno las variables con "join" separando con un espacio
  // y lo asigno al contenido del elemnto HTML <pre> creado:
  linea.innerText = variables.join(' ');

  // Agrego al contenedor "consola":
  consola.appendChild(linea);
}
// Al iniciar, borro lo que hay en la consola actualmente:
console.clear();

// =====================================================
// 1. Crea una Clase para definir a un Usuario genérica.
// Definir la clase "User".
//
// Debe tener las siguientes características:
//   - "username": Nombre de usuario.
//     Propiedad texto (String).
//     Default: null.
//   - "age": Edad.
//     Propiedad numérica (Number).
//     Default: null.
//   - "password": Contraseña.
//     Propiedad texto (String).
//     Default: null.
//   - "loggedIn": Usuario logueado?
//     Propiedad Booleano (Boolean).
//     Default: false (Falso).
//   - "login(): Debe definirse un método que
//     establezca la propiedad "loggedin" en
//     `true` cuando el valor que se pasa por
//     parámetro es igual al 'password' de la
//     instancia actual.
//     Al llamar al método "login()", debe imprimirse el
//     texto 'Usuario [username] ha iniciado sesión' si
//     el 'password' ingresado es correcto, o el texto
//     'Contraseña incorrecta' si la misma es
//     incorrecta.

class User {
  userName = 'null';
  constructor(name, pass, age) {
    this.userName = name;
    this.password = pass;
    this.age = age;
  }
  age = Number(null);
  mayorDeEdad = false;
  password = 'null';
  loggedIn = false;
  
  login() {
    let checkPass = prompt(`${this.userName} Ingrese su contraseña`)
    if (checkPass === this.password) {
      this.loggedIn = true
      imprimir(`Usuario [${this.userName}] ha iniciado sesión`)
    } else {
      imprimir('Contraseña incorrecta')
    }
  }

  esMayor() {
    if (this.age >= 18) {
      this.mayorDeEdad = true;
      // imprimir (this.mayorDeEdad)
    } else {
      // imprimir (this.mayorDeEdad);
      imprimir('Debes ser mayor de edad');
    }
    return this.mayorDeEdad;
  }
}

const user1 = new User();
user1.userName = 'Juan';
user1.age = 11;
user1.password = 'asd123';


// >>>>>>>>>>>>>   Ejercicio 1 Tester   <<<<<<<<<<<<<<<<
// =====================================================
// user1.login()  //quitar comentario para testear el ejercicio
// =====================================================


// =====================================================
// 2. Crear la clase "Vendedor" a partir de la clase
// "User".
//
// Ahora, el Vendedor debe poder generar una venta.
// Para ello, se debe agregar un método "vender" al cuál
// se le indique una descripción del producto vendido
// por parámetro. Las ventas deben guardarse en un array
// de ventas interno de la instancia.
//
// Para poder realizar la cción de "vender", el usuario
// debe haber iniciado sesión mediante el método
// "login()" definido en la clase padre.
//
// Documentación recomendada:
//   - https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Objetos_globales/Array/push

class Vendedor extends User {
  ventas = [];
  vender() {
    if (this.loggedIn && this.mayorDeEdad) {
      let productoVendido = prompt('¿Qué vendiste?');
      this.ventas.push(productoVendido);
    } else {
      this.esMayor();
      if (this.mayorDeEdad) {
        this.login();
        this.vender();
      }
    }
  }
}

const user2 = new Vendedor("Dora la vendedora");
user2.age = 44;
user2.password = 'vendo';

// >>>>>>>>>>>>>   Ejercicio 2 Tester   <<<<<<<<<<<<<<<<
// =====================================================
// user2.vender()  //quitar comentario para testear el ejercicio
// =====================================================

// =====================================================
// 3. Crear la clase "Comprador" a partir de la clase
// "User".
// Ahora, el Comprador debe poder generar una compra.
// Para ello, se debe agregar un método "comprar",
// al cuál se le indique una instancia de Vendedor
// que será quien le ha vendido el producto, y una
// descripción del producto vendido.
//
// Para poder realizar la cción de "comprar", el usuario
// debe haber iniciado sesión mediante el método
// "login()" definido en la clase padre.
//
// Desde el metodo "comprar" se debe agregar el
// producto vendido al vendedor, e imprimir el siguiente
// texto de ejemplo:
// imprimir([
//   'El vendedor [vendedor.username]',
//   ' ha vendido [descripción producto]',
//   ' a [comprador.username]',
// ]);


class Comprador extends User {
  comprar() {
    if (this.loggedIn && this.mayorDeEdad) {
      let productoComprado = prompt('¿Qué compraste?');
      user2.ventas.push(productoComprado);
      imprimir(`El vendedor [${user2.userName}] ha a vendido [${productoComprado}] a [${this.userName}]`)
    }
    else {
      this.esMayor();
      if (this.mayorDeEdad) {
        this.login();
        this.comprar();
      }
    }
  }
}

const user3 = new Comprador('José', 'compro', 22); //paso por parámetros los valores de las propiedades del ejercicio 4

//>>>>>>>>>>   parámetros del ejercicio 3   <<<<<<<<<<<<
// user3.age = 55;
// user3.password = 'compro';

// >>>>>>>>>>>>>   Ejercicio 3 Tester   <<<<<<<<<<<<<<<<
// =====================================================
// user3.comprar()  //quitar comentario para testear el ejercicio
// =====================================================

// =====================================================
// 4. Modificar las clases anteriores y agregar un
// "constructor" que reciba por parámetros
// los valores de las propiedades "username",
// "password" y "age".

// >>>>>>>>>>>>>   Desarrollo Ejercicio 4   <<<<<<<<<<<<<<<<
// El código es agregado a la clase padre "User".-
// En el ejercicio 3 paso por parámetros los valores de las propiedades agregadas.-
// =====================================================
// constructor(name, pass, age) {
//   this.userName = name;
//   this.password = pass;
//   this.age = age;
// }
// =====================================================


// =====================================================
// 5. Modificar las clases anteriores y agregar un
// método "esMayor()" que devuelva `true` si el usuario
// es mayor de edad (`age >= 18`).

// >>>>>>>>>>>>>   Ejercicio 5 Tester   <<<<<<<<<<<<<<<<
// =====================================================
// user1.esMayor()  //quitar comentario para testear el ejercicio
// user2.esMayor()  //quitar comentario para testear el ejercicio
// =====================================================


// =====================================================
// 6. Modificar las clases anteriores, de forma tal que
// solo las clases hijas de "User" (o sea: "Vendedor"
// y "Comrpador") verifiquen si "esMayor()" es `true`
// para hacer "login()". Si no es mayor de edad, debe
// mostrar un mensaje "Debes ser mayor de edad" e
// impedir el "login()" definido en "User".

const user4 = new Comprador('soyMenor', 'asdasd', 15);

// >>>>>>>>>>>>>   Ejercicio 6 Tester   <<<<<<<<<<<<<<<<
// =====================================================
// user2.vender()  //quitar comentario para testear el ejercicio
// user3.comprar() //quitar comentario para testear el ejercicio
// user4.comprar() //quitar comentario para testear el ejercicio
// // =====================================================