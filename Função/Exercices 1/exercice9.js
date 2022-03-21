function sistemasDeNota(nota) {
    if (nota < 38) {
        console.log(`Nota: ${nota}             | Situação -> Reprovado`)
    } else {
        if (nota % 5 > 2) {
            nota += (5 - (nota % 5))
            console.log(`Nota Arredondada: ${nota} | Situação -> Aprovado`)
        } else {
            console.log(`Nota: ${nota}            | Situação -> Aprovado`)
        }
    }
}

sistemasDeNota(100)
sistemasDeNota(30)
sistemasDeNota(38)
sistemasDeNota(88)
sistemasDeNota(37)
sistemasDeNota(73)