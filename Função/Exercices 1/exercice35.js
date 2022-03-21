let vetPilha = [1, 2, 3, 4, 5]
let vetAdiciona = [6, 7, 8, 9, 10]

function juntarVet(vetPilha, vetAdiciona) {
    for(i in vetAdiciona) {
        console.log(vetAdiciona[i])
        vetPilha.push(vetAdiciona[i])
    }

    console.log('Vetor adicionado: ' + vetAdiciona)
    console.log('Vetor final: ' + vetPilha)
}

juntarVet(vetPilha, vetAdiciona)