function desempenhoBasket(stringPontuacoes) {
    let pontuacoes = stringPontuacoes.split(', ')
    let quebraDeRecords = 0
    let piorJogo = 1
    let maiorPontuacao = pontuacoes[0]
    let menorPontuacao = pontuacoes[0]

    for (let i = 0; i < pontuacoes.length; i++) {
        if (parseInt(pontuacoes[i]) > maiorPontuacao) { // Sem o parseInt não funcionou
            maiorPontuacao = pontuacoes[i]
            quebraDeRecords++
        } else if (pontuacoes[i] < menorPontuacao) {
            menorPontuacao = pontuacoes[i]
            piorJogo = i + 1
        }
    }

    return [quebraDeRecords, piorJogo]
}

console.log(desempenhoBasket('30, 40, 20, 4, 51, 25, 42, 38, 56, 0, 57'))
console.log(desempenhoBasket('10, 20, 20, 8, 25, 3, 0, 30, 1'))