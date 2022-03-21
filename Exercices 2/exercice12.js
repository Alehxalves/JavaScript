function deletarPropriedade(obj, propriedade) {
    const copia = Object.assign({}, obj);
    delete copia[propriedade];

    return copia;
}

function deletarPropriedade2(obj, propriedade) {
    const copia = {...obj};
    delete copia[propriedade];

    return copia;
}

const obj = { a: 1, b: 2 };
const obj2 = {
    id: 20,
    nome: "Caneta",
    descricao: "Não preenchido"
} 

console.log(deletarPropriedade(obj, "a"));
console.log(Object.is(deletarPropriedade(obj, "a"), obj));

console.log(deletarPropriedade2(obj2, "descricao"));
console.log(Object.is(deletarPropriedade2(obj2, "descricao"), obj2));
