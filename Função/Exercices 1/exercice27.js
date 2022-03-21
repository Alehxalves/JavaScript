function calcularCrescimento(altura1, taxa1, altura2, taxa2) {
    if (altura1 == altura2)
        if (taxa1 > taxa2) {
            return 'A criança 1 irá ultrapassar a 2 em 1 ano.'
        } else if(taxa2 > taxa1) {
            return 'A criança 2 irá ultrapassar a 1 em 1 ano.'
        } else {
            return 'As crianças tem alturas iguais'
        }
    if (altura1 > altura2) {
        if (taxa1 >= taxa2) {
            return 'A criança 2 não irá ultrapassar a maior'
        } else {
            return `A criança 2 irá ultrapassar a maior em ${calcularTempo(altura2, taxa2, altura1, taxa1)} ano(s)`
        }
    } else {
        if (taxa2 >= taxa1) {
            return 'A criança 1 não irá ultrapassar a maior'
        } else {
            return `A criança 1 irá ultrapassar a maior em ${calcularTempo(altura1, taxa1, altura2, taxa2)} ano(s)`
        }
    }
}

function calcularTempo(alturaMenor, taxaMenor, alturaMaior, taxaMaior) {
    let anos = 0

    while (alturaMenor < alturaMaior) {
        alturaMenor += (alturaMenor * taxaMenor)
        alturaMaior += (alturaMaior * taxaMaior)
        anos++
    }

    return anos
}

console.log(calcularCrescimento(150, 2, 150, 1))
console.log(calcularCrescimento(140, 2, 150, 1))
console.log(calcularCrescimento(150, 3, 130, 3.5))