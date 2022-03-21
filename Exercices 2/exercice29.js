function segundoMaior(numeros) {
    const maiorNum = Math.max(...numeros);
    numeros = numeros.filter(num => num != maiorNum)
    const segundoMaior = Math.max(...numeros)
    
    return segundoMaior;
}

console.log(segundoMaior([12, 16, 1, 5]));
console.log(segundoMaior([8, 4, 5, 6]));