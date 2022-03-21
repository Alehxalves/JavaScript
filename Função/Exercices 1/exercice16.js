function calculadoraBasica(num1, str, num2) {
    switch (str) {
        case '+':
            return `${num1} ${str} ${num2} = ${num1 + num2}`
        case '-':
            return `${num1} ${str} ${num2} = ${num1 - num2}`
        case '*':
            return `${num1} ${str} ${num2} = ${num1 * num2}`
        case '/':
            return `${num1} ${str} ${num2} = ${num1 / num2}`
        case '%':
            return `${num1} ${str} ${num2} = ${num1 % num2}`
        default:
            return 'Operação inválida!'
    }
}   

console.log(calculadoraBasica(2, '+', 3))
console.log(calculadoraBasica(5, '-', 1))
console.log(calculadoraBasica(6, '*', 5))
console.log(calculadoraBasica(4, '/', 2))
console.log(calculadoraBasica(5, '%', 5))
console.log(calculadoraBasica(1, '$', 1))