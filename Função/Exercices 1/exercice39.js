function trocarVet(vet1, vet2) {
    if(vet1.length != vet2.length) { return 'Vetores de tamanhos diferentes!'}

    for (let i = 0; i < vet1.length; i++) {
        vet1[i] = vet1[i] + vet2[i]
        vet2[i] = vet1[i] - vet2[i]
        vet1[i] = vet1[i] - vet2[i]
    }

    console.log('Novo VetorA = ' + vet1)
    console.log('Novo VetorB = ' + vet2)

}

let vetorA = [1, 2, 3]
let vetorB = [4, 5, 6]

trocarVet(vetorA, vetorB)