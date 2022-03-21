function objectToArray(obj) {
    const chaves = Object.keys(obj);
    const resultado = chaves.map(chave => [chave, obj[chave]])

    return resultado;
}

const obj1 = {
    nome: "Maria", 
    profissao: "Desenvolvedora de software" 
}
const obj2 = {
    codigo: 11111, 
    preco: 12000 
}

console.log(objectToArray(obj1));
console.log(objectToArray(obj2));