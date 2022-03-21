function comprimentar(nome) {
    const saudacao = "Olá";
    return [saudacao, nome].join(', ').concat("!");
    //return ('Olá, ').concat(nome).concat('!');
}

console.log(comprimentar('João'));
console.log(comprimentar('Maria'));