function realizarPedido(codigo, qtd) {
    switch (codigo) {
        case 100:
            return `Pedido: Cachorro Quente, Quantidade: ${qtd}, Valor Total: R$${(3 * qtd).toFixed(2)}.`
        case 200:
            return `Pedido: Hambúrguer Simples, Quantidade: ${qtd}, Valor Total: R$${(3 * qtd).toFixed(2)}.`
        case 300:
            return `Pedido: Cheeseburguer, Quantidade: ${qtd}, Valor Total: R$${(3 * qtd).toFixed(2)}.`
        case 400:
            return `Pedido: Bauru, Quantidade: ${qtd}, Valor Total: R$${(3 * qtd).toFixed(2)}.`
        case 500:
            return `Pedido: Refrigerante, Quantidade: ${qtd}, Valor Total: R$${(3 * qtd).toFixed(2)}.`
        case 600:
            return `Pedido: Suco, Quantidade: ${qtd}, Valor Total: R$${(3 * qtd).toFixed(2)}.`
        default:
            return 'Produto inválido.'
    }
}   

console.log(realizarPedido(100, 1))
console.log(realizarPedido(200, 3))
console.log(realizarPedido(300, 4))
console.log(realizarPedido(400, 5))
console.log(realizarPedido(500, 6))
console.log(realizarPedido(600, 7))
console.log(realizarPedido(700, 100))