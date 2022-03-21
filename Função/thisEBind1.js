const pessoa = {
    suadacao: 'Bom dia!',
    falar() {
        console.log(this.suadacao)
    }
}

pessoa.falar()
const falar = pessoa.falar
falar() // COnflito entre paradigmas: funcional e oo

const falarDePessoa = pessoa.falar.bind(pessoa)
falarDePessoa()