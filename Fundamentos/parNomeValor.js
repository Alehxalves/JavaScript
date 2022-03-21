const saudacao = 'Salve' // Contexto léxico 1

function exec() {
    const saudacao = 'Suave?' // Contexto léxico 2
    return saudacao
}

// Objetos são grupos aninhados de pares nome/valor
const cliente = {
    nome: 'Alex',
    idade: 24,
    peso: 74,
    endereco: {
        logradouro: 'Rua Travessa José Viana',
        numero: 619
    }
}

console.log(saudacao)
console.log(exec())
console.log(cliente)