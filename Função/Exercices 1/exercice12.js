function calcFatorial(num) {
    if (num == 0) { return 1 }

    let fatorial = num

    for (let i = 1; i < num; i++) {
        fatorial *= i
    }
    return fatorial
}

function calcFatorialRecursivo(num) {
    if (num == 0) {
        return 1
    } else {
        return num * calcFatorialRecursivo(num - 1)
    }
}

console.log(calcFatorial(0))
console.log(calcFatorial(6))
console.log(calcFatorialRecursivo(7))
console.log(calcFatorialRecursivo(8))

