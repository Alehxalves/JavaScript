function funcaoDaSorte(numero) {
    const randomNum = Math.floor((Math.random() * 10) + 1);

    if(randomNum == numero) return `Parabéns! O número sorteado foi o ${randomNum}`
    else return `Que pena! O número sorteado foi o ${randomNum}`;
}

console.log(funcaoDaSorte(10));
console.log(funcaoDaSorte(5));
console.log(funcaoDaSorte(5));