function returnFirstAndLasElement(array) {
    const newArray = [];

    newArray.push(array.shift());
    newArray.push(array.pop());

    return newArray;
}

console.log(returnFirstAndLasElement([7,14,"olá"]));
console.log(returnFirstAndLasElement([-100, 'Aplicativo', 16]));