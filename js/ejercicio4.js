function sumar (a,b){
    return a+b
}
function restar (a,b){
    return a-b
}
function multiplicar (a,b){
    return a*b
}
function dividir (a,b){
    if (b===0) {
        return "no se puede dividir por cero"
    }
    return a/b
}

function calcular(operacion, num1, num2) {
  if (operacion === "suma") {
    return sumar(num1, num2);
  } else if (operacion === "resta") {
    return restar(num1, num2);
  } else if (operacion === "multiplicacion") {
    return multiplicar(num1, num2);
  } else if (operacion === "division") {
    return dividir(num1, num2);
  } else {
    return "Operación no válida";
  }
}

let numero1 = Number(prompt("dame un numero"))
let numero2 = Number(prompt("dame otro numero"))


console.log("Suma:", calcular("suma", numero1, numero2));
console.log("Resta:", calcular("resta", numero1, numero2));
console.log("Multiplicación:", calcular("multiplicacion", numero1, numero2));
console.log("División:", calcular("division", numero1, numero2));
