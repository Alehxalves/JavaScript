function menorNumero(numeros) {
    const menorNum = (anterior, atual) => anterior > atual ? atual : anterior;

    return numeros.reduce(menorNum);
}

console.log(menorNumero([10, 5, 35, 65]));
console.log(menorNumero([5, -15, 50, 3]));