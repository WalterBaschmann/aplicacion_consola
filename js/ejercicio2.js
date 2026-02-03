let numero1
let numero2
const mensaje = "Operaciones matemáticas"

numero1 = Number(prompt("ingresa el primer número"))
numero2 = Number(prompt("ingresa el segundo número"))

let suma = numero1 + numero2
let resta = numero1 - numero2
let multiplicacion = numero1 * numero2
let division = numero1 / numero2

console.log(mensaje)
console.log("suma", suma)
console.log("resta", resta)
console.log("multiplicación", multiplicacion)
console.log("división", division)

if (numero2 === 0){
    console.log("no se puede dividir por cero")
} 
    else{
        console.log("el resultado de la división es:")
    }

let opcion = prompt("elige una operación: suma, resta, multiplicacion o division")

switch (opcion) {
    case "suma":
        console.log("Resultado:", suma);
        break;
    case "resta":
        console.log("Resultado:", resta);
        break;
    case "multiplicacion":
        console.log("Resultado:", multiplicacion);
        break;
    case "division":
        if (numero2 === 0) {
        console.log("Error: no se puede dividir por cero.");
        } else {
        console.log("Resultado:", division);
        }
        break;
    default:
        console.log("Operación no válida.");
}