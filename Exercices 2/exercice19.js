function mediaSimples(arrayNums) {
    const somaTotal = arrayNums.reduce((acumulador, atual) => acumulador + atual, 0);
    
    return somaTotal / arrayNums.length;
}

console.log(mediaSimples([0, 10]));
console.log(mediaSimples([1, 2, 3, 4, 5 ]));