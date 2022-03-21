function intervaloVetor(vet) {
    let foraIntervalo = 0
    let dentroIntervalo = 0

    for (let i = 0; i < vet.length; i++) {
        if (vet[i] >= 10 && vet[i] <= 20) {
            dentroIntervalo++
        } else {
            foraIntervalo++
        }
    }

    console.log(`${dentroIntervalo} dentro do intervalo [10, 20]. ${foraIntervalo} fora do intervalo.`)
}

vet = [10, 9, 11, 2, 22]
vet2 = [ 7, 8, 9, 10, 11, 12, 16, 17, 18, 19, 20, 21]

intervaloVetor(vet)
intervaloVetor(vet2)