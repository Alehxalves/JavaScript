function planoConvenio(idade) {
    let valorPlano = 100
    
    if (idade > 60) {
        valorPlano += 130
    } else if (idade > 30) {
        valorPlano += 95
    } else if (idade > 10) {
        valorPlano += 50
    } else {
        valorPlano += 80
    }

    return valorPlano
}

console.log(planoConvenio(9))
console.log(planoConvenio(27))
console.log(planoConvenio(35))
console.log(planoConvenio(61))