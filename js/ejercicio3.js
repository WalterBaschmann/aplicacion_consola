const numeros = []

for (let i = 1; i <= 20; i++){
    numeros.push(i)
}

for (let i = 0; i < numeros.length; i++){
    console.log("For:", numeros[i])
}

let i = 0

while(i < numeros.length){
    console.log("while:",numeros[i])
    i++
}

function filtrarPares(array) {
    const pares = []
    for (let i=0; i < array.length; i++){
        if (array[i] %2 === 0){
            pares.push(array[i])
        }
    }
    return pares
}

const numerosPares = filtrarPares(numeros)
console.log("numeros pares:", numerosPares)