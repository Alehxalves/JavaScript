function receberSomenteOsParesDeIndicesPares(array) {
    const indicePar = (dummykey, index) => index % 2 == 0;
    const numeroPar = numero => numero % 2 == 0

    return array.filter(indicePar).filter(numeroPar);
}

console.log(receberSomenteOsParesDeIndicesPares([1, 2, 3, 4]));
console.log(receberSomenteOsParesDeIndicesPares([10, 70, 22, 43]));