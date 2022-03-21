function paresImpares(vet) {
    let pares = 0
    let impares = 0

    for (let i = 0; i < vet.length; i++) {
        if (vet[i] % 2 == 0) {
            pares++
        } else {
            impares++
        }
    }

    console.log(`Quantidade de pares = ${pares}. Quantidade de ìmpares = ${impares}`)
}

vet = [2, 1, 3, 6, 7]
vet2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]

paresImpares(vet)
paresImpares(vet2)