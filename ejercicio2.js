// Ejercicio 2: Verificar si un número es positivo, negativo o cero
// Enunciado:
// En este ejercicio, practicarás el uso de condicionales (if, else). Escribe un programa en
// JavaScript que:
// 1. Pida al usuario que ingrese un número.
// 2. Verifique si el número es positivo, negativo o igual a cero.
// 3. Muestre un mensaje indicando cuál es el caso.
// Requisitos:
// ● Utilizá una estructura de control de flujo (if, else if, else) para hacer las
// verificaciones.
// ● Usá parseFloat() para convertir la entrada del usuario a un número.

const prompt = require (`prompt-sync`)();

// 1) pedir al usuario
let numero = parseFloat(prompt("Ingrese un numero: ")); // 

// 2) cverificamos positividad, negatividad o nulidad

if (numero > 0){
    console.log("el numero es positivo");
} else if(numero < 0){
    console.log("el numeor es negativo");
} else {
    console.log("el numero es 0");
}
