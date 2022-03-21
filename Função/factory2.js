function criarProduto(nome, preco) {
    const prod = {
        nome,
        preco,
        desconto: 0.1
    }
    return prod
}

const arroz = criarProduto('arroz', 10)
const feijao = criarProduto('feijao', 15)
const produtos = [arroz, feijao]
produtos.push(criarProduto('Agua Mineral', 5))

console.log(produtos)