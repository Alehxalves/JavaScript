function somarNumeros(array) {
    const soma = array.reduce((acumulador, numAtual) => acumulador + numAtual, 0 );

    return soma;
}

console.log(somarNumeros([10, 10, 10]));
console.log(somarNumeros([15, 15, 15, 15]));