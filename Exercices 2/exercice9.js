function repetir(item, quantidade) {
    const array = [];

    for (let i = 0; i < quantidade; i++)
        array.push(item);
    return array;
}

function repetir2(item, quantidade) {
    return Array(quantidade).fill(item);
}

console.log(repetir("código", 2));
console.log(repetir(7, 3));

console.log(repetir("fon", 5));
console.log(repetir(1, 2));