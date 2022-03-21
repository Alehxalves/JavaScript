// Armazenando uma função em uma variável
const imprimirSoma = function (a, b) {
    console.log(a + b)
}

imprimirSoma(6, 1)

// Armazenando uma função arrow em uma variável
const soma = (a, b) => {
    return a + b
}

console.log(soma(2, 2))

// Retorno implícito
const subtracao = (a, b) => a - b
console.log(subtracao(6, 4))

const imprima = a => console.log(a)

imprima('Hello World!')