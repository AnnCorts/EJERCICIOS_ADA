// Ejercicio 1: Calculá el doble de un número
// Enunciado:
// En este ejercicio, practicarás el uso de variables y operadores aritméticos. Debes escribir
// un programa en JavaScript que:
// 1. Solicite al usuario que ingrese un número cualquiera.
// 2. Calcule el doble de ese número.
// 3. Muestre el resultado en la consola.
// Requisitos:
// ● Utiliza la función prompt() para solicitar el dato al usuario.
// ● Almacená el número ingresado en una variable.
// ● Utiliza un operador aritmético para calcular el doble del número.

const prompt = require (`prompt-sync`)();

// 1) pedir al usuario
let numero = parseFloat(prompt("Ingrese un numero: ")); // 

// 2) calculamos el doble del numero ingresado

let dobleNumero = numero * 2;

// 3) mostrar resultado

console.log('El doble de tu numero ingresado es: ' + dobleNumero);
