function sacarDinheiro(valor) {
    if(valor < 1) { return 'Valor não aceito'}

    const qtdCelulas = {
        cedula100: 0,
        cedula50: 0,
        cedula10: 0,
        cedula5: 0,
        cedula1: 0
    }
    
    while (valor > 0) {

        if (valor >= 100) {
            valor -= 100
            qtdCelulas.cedula100++
        } else if (valor >= 50) {
            valor -= 50
            qtdCelulas.cedula50++
        } else if (valor >= 10) {
            valor -= 10
            qtdCelulas.cedula10++
        } else if (valor >= 5) {
            valor -= 5
            qtdCelulas.cedula5++
        } else {
            valor -= 1
            qtdCelulas.cedula1++
        }
    }

    return contarQtdCelulas(qtdCelulas)
}

function contarQtdCelulas(qtdCelulas = {}) {
    let resultado = ''

    for (atributo in qtdCelulas) {

        if (qtdCelulas[atributo] > 0) {

            switch (atributo) {
                case 'cedula100':
                    resultado += `${qtdCelulas[atributo]} nota(s) de R$ 100. `
                    break;
                case 'cedula50':
                    resultado += `${qtdCelulas[atributo]} nota(s) de R$ 50. `
                    break;
                case 'cedula10':
                    resultado += `${qtdCelulas[atributo]} nota(s) de R$ 10. `
                    break;
                case 'cedula5':
                    resultado += `${qtdCelulas[atributo]} nota(s) de R$ 5. `
                    break;
                case 'cedula1':
                    resultado += `${qtdCelulas[atributo]} nota(s) de R$ 1. `
                    break;
                default:
                    resultado = 'ERROR!'
                    break;
            }
        }
    }

    return resultado
}

console.log(sacarDinheiro(0))
console.log(sacarDinheiro(2))
console.log(sacarDinheiro(18))
console.log(sacarDinheiro(35))
console.log(sacarDinheiro(100))
console.log(sacarDinheiro(350))