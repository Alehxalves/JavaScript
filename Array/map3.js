Array.prototype.map2 = function(callback) {
    const newArray = [];

    for (let i = 0; i < this.length; i++) {
        newArray.push(callback(this[i], i, this));
    }
    return newArray;
}

const carrinho = [
    '{"nome": "Borracha", "preco": "3.45"}',
    '{"nome": "Caderno", "preco": "13.90"}',
    '{"nome": "Kit de Lápis", "preco": "41.22"}',
    '{"nome": "Caneta", "preco": "7.50"}'
]

const paraObjetc = json => JSON.parse(json);
const getPreco = produto => produto.preco;

const result = carrinho.map2(paraObjetc).map2(getPreco);

console.log(result);