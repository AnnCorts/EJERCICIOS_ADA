// programa que simula un loro.
// repite lo que escucha 5 veces.

// 1. IMPORTACION DE LA LIBRERIA
const prompt = require (`prompt-sync`)();

// 2. entrada de datos:
// le pedimos al usuario la frase que el loro va a repetir.
let textoEscuchado = prompt(" ESCRIBÍ ALGO PARA QUE EL LORO REPITA: ");

console.log(" ---  el loro comienza a decir:  --- ");
// 3. ESTRUCTURA DEL FOR (BUCLE)
// el for es ideal para cuando sabemos de antemano cuantas veces queremos repetir algo.
// tiene 3 partes separadas por punto y coma.
// A) INICIO  ---> (let i=1):  --->   creamos un contador que empieza en 1
// B) CONDICION  --->  i<=5    --->  el ciclo sigue mientras el contador sea menor o igual a 5
// C) MODIFICADOR INCREMENTO ---> (i++) --->  al final de cada vuelta le sumamos 1 al contador

for (let i = 1 ; i <= 5 ; i++ ){
    // lo que pongamos aquii adentro se va a ejecutar 5 veces
    console.log (i + " _ " + textoEscuchado);
}

console.log(" --- el loro ya se cansó --- ");
