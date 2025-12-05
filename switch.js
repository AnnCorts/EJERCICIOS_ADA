// Ejemplo: determinar que dia de la semana es segun un numero

// 1. IMOPRTACION DE LA LIBRERIA
const prompt =require (`prompt-sync`)();

// 2. ENTRADA DE DATOS
// Pedimos el numeor. Usamos parseInt porque el switch compara valores exactos.

let numeroDia = parseInt(prompt(" Ingrese un numeor del 1 al 7: "));

// 3. ESTRUCTURA SWITCH
// El switch evalua la variable que se pone entre parentesis (numeroDia).
// Luego, busca abajo el "caso" (case) que coincida con ese valor.

switch (numeroDia) {
    // si numeroDia es igual a 1..
    case 1:
        console.log("es lunes.")
        break; // es el freno de mano.
           // le dice al programa que ya encontro lo que buscaba.
    // si numero es igual a 2...
    case 2:
        console.log("es martes.");
        break; // el break 
    case 3:
        console.log("es miercoles.");
        break;
    case 4:
        console.log("es jueves.");
        break; 
    case 6:
        console.log("es viernes.");
        break;
            case 4:
        console.log("es sabado.");
        break; 
    case 7:
        console.log("es domingo.");
        break;
    //DEFAULT
    // Funciona igual que el else final
    // si el numero no fue ninguno de los anteriores, entra aca
    default:
        console.log("error: El numero que ingresaste no cumple con la consigna.")
    //aca no hace falta colocar el break. porque ya es el final. Pero se puede colocar.
    break;
}

