// Recurso do ES2015

const pessoa = {
    nome: 'Ana',
    idade: 20,
    endereco: {
        logradouro: 'Rua A',
        numero: 619
    }
}

const { nome, idade } = pessoa
console.log(nome, idade)

const { nome: n, idade: i } = pessoa
console.log(n, i)

const { sobrenome, bemHumorada = true } = true
console.log(sobrenome, bemHumorada)
console.log(pessoa)

const { endereco: { logradouro, numero, cep } } = pessoa
console.log(logradouro, numero, cep)
