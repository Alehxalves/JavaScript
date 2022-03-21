function filtrarPorQuantidadeDeDigitos(numeros, quantidade) {
    return numeros.filter(item => {
        const quantidadeDigito = String(item).length;

        return quantidadeDigito === quantidade;
    })
}

console.log(filtrarPorQuantidadeDeDigitos([38, 2, 365, 10, 125, 11], 2));
console.log(filtrarPorQuantidadeDeDigitos([5, 9, 1, 125, 11], 1));