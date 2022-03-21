// Pessoa -> 123 {...}
const pessoa = { nome: 'Joao'}
pessoa.nome = 'Pedro'
console.log(pessoa)

// Pessoa <- 456 -> {...} 
//pessoa = { nome: 'Ana'}

Object.freeze(pessoa) // O objeto em si vira uma constante

pessoa.nome = 'Maria'
pessoa.end = 'Rua ABC'
delete pessoa.nome

console.log(pessoa.nome)
console.log(pessoa)

const pessoaConstante = Object.freeze({ nome: 'Joao' })

console.log(pessoaConstante)