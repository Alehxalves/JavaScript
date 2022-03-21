function concat(...args) {
    resultado = []

    for (let i = 0; i < arguments.length; i++) {
        resultado = resultado.concat(arguments[i])
    }

    return resultado
}   

let vetInt = [1, 2, 3]
let vetStr = ['a', 'b', 'c']
let vetDoub = [1.5, 2.6, 3.7]

console.log(concat(vetInt, vetStr))
console.log(concat(vetStr, vetDoub))