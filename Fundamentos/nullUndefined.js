let valor // Não inicializada
console.log(valor)

valor = null // Ausênciade valor
console.log(valor)
// console.log(valor.toString()) // TypeError!

const produto = {}
console.log(produto.preco)
console.log(produto)

produto.preco = 3.50
console.log(produto)

produto.preco = undefined // Evitar atribuir undefiend
console.log(!!produto.preco)
console.log(produto)

produto.preco = null // Sem preço
console.log(!!produto.preco)
console.log(produto)