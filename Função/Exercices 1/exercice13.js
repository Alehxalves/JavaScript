function diaSemana(dia) {
    if (dia > 7 && dia < 32) {
        dia %= 7
        if (dia == 0) { dia = 1}
    }
    switch (dia) {
        case 1:
            return 'Domingo final de semana'
        case 2:
            return 'Segunda dia útil'
        case 3:
            return 'Terça dia útil'
        case 4:
            return 'Quarta dia útil'
        case 5:
            return 'Quinta dia útil'
        case 6:
            return 'Sexta dia útil'
        case 7:
            return 'Sábado Final de semana'
        default:
            return 'Dia inválido!'
    }
}

console.log(diaSemana(9))
console.log(diaSemana(21))
console.log(diaSemana(11))
console.log(diaSemana(66))
console.log(diaSemana('a'))