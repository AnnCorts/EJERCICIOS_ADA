// Ejemplo: Verificar si una persona es mayor de edad.

// 1- IMPORTACION DE LA LIBRERIA  
 const prompt = require (`prompt-sync`)();     //la linea para importar la librería

// 2 - ENTRADA DE DATOS: INGRESAR LA EDAD
 let edad = parseInt(prompt("ingrese su edad: "));

 // 3 - LOGICA CON EL IF TERNARIO
 // if ternario tiene una forma abreviada en una sola linea.
 // Estructura: (condicion) ? "valor si es verdadero" : " valor si es falso";
 
 // El signo de interrogacion "?" actua como el "if" (se cumple esto?)
 // El signo dos puntos ":" actua como "else" (si no, esto otro).
 
 let mensaje = (edad >= 21) ? " es mayor de edad" : "sos menor de edad";
 
 console.log(mensaje);


