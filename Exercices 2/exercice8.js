function multiplicar(num1, num2) {
    let result = 0;
    for(let i = 0; i < num2; i++) {
        result += num1;
    }
    return result;
}

console.log(multiplicar(5, 5));
console.log(multiplicar(0, 0));