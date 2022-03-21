function buscarPalavrasSemelhantes(palavra, arrayPalavras) {
    return arrayPalavras.filter(item => item.includes(palavra));
}

const a = ""

console.log(buscarPalavrasSemelhantes("pro", ["programação", "mobile", "profissional"]));
console.log(buscarPalavrasSemelhantes("python", ["javascript", "java", "c++"]));