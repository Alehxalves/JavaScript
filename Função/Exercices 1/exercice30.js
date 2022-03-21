function maxMinVetor(vet) {
    let max = vet[0]
    let min = vet[0]

    for (let i = 0; i < vet.length; i++) {
        if (max < vet[i]) {
            max = vet[i]
        }
        if(min > vet[i]) {
            min = vet[i]
        }
    }

    return `${max} é o maior valor do vetor e ${min} o menor`
}

vet = [1, 2, 3, 10, 4]

console.log(maxMinVetor(vet))