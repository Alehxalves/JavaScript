function filtrarNumeros(array) {
    const isNum = element => typeof(element) === 'number';
    return array.filter(isNum);
}

console.log(filtrarNumeros(["JavaScript", 1, "3", "Web", 20]));
console.log(filtrarNumeros(["a", "c"]));