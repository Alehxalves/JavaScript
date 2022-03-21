function triangulos(a, b, c) {
    if (isNaN(a, b, c)) {
        return 'Apenas números!'
    }
    if (a == b && b == c) {
        return 'Triângulo Equilátero'
    } else if (a == b || b == c || a == c) {
        return 'Triângulo Isósceles'
    } else {
        return 'Triângulo Escaleno'
    }
}

console.log(triangulos(1.2, 1.2, 1.2))
console.log(triangulos(6, 2, 6))
console.log(triangulos(4, 11, 6))
