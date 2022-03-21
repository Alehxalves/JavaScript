let vetNumerico = [3, 5, 6, 8]
let vet2 = [1, 2, 3, 4, 5]

function multVet(vetNumerico, multiplicador) {
    let resultado = []

    for (let i = 0; i < vetNumerico.length; i++) {
        resultado.push((vetNumerico[i] * multiplicador))
    }

    return resultado
}

function multVetMaior5(vetNumerico, multiplicador) {
    let resultado = []

    vetNumerico.forEach(element => {
        element > 5 ? resultado.push(element * multiplicador) : false
    });

    return resultado
}

console.log(multVet(vetNumerico, 3))
console.log(multVetMaior5(vetNumerico, 6))

console.log(multVet(vet2, 3))
console.log(multVetMaior5(vet2, 6))