function calcMediaAritmetica(vet) {
    let media = 0

    for (let i in vet) {
        media += vet[i]
    }

    media /= vet.length

    return media.toFixed(2)
}

vet = [5, 7, 7]

console.log(calcMediaAritmetica(vet))