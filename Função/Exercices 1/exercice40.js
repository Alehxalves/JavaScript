function conceituarNotas(vetNotas) {
    let conceitoNota = []

    for (i in vetNotas) {
        if (vetNotas[i] >= 0.0 && vetNotas[i] <= 4.9) {
            conceitoNota.push('(D)')
        } else if (vetNotas[i] <= 6.9) {
            conceitoNota.push('(C)')
        } else if (vetNotas[i] <= 8.9) {
            conceitoNota.push('(B)')
        } else if (vetNotas[i] <= 10) {
            conceitoNota.push('(A)')
        } else {
            conceitoNota.push('Nota inválida.')
        }
    }

    return conceitoNota
}

let notasAlu1 = [4, 6.8, 7.9, 9, 11]
let conceituarNotaAlu1 = conceituarNotas(notasAlu1)

console.log(conceituarNotaAlu1)