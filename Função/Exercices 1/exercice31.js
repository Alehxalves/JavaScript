function contarNegativos(vet) {
    let qtdNegativos = 0
    for (i in vet) {
        if (vet[i] < 0) { qtdNegativos++ }
    }

    return qtdNegativos
}

vet = [-1, 2, 3, -5, 10]
vet2 =  [10, 5, -7, 3, -1, 3, -11, -20, 6, 9]

console.log(contarNegativos(vet))
console.log(contarNegativos(vet2))