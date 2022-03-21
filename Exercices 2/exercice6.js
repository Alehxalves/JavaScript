function inverso(value) {
    if (typeof(value) == "boolean") {
        return !value;
    } else if (typeof(value) == "number") {
        return -value;
    } else {
        return `Booleano ou números esperados, mas o parâmetro é do tipo ${typeof(value)}`;
    }
} 

console.log(inverso(true));
console.log(inverso("6"));
console.log(inverso(-2000));
console.log(inverso("programação"));
