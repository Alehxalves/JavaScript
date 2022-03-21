function brl(valor) {
    // Método 1
    valorEmReais = valor.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })
    console.log(valorEmReais + ' Método 1')
    // Método 2
    valorEmReais2 = `R$ ${valor.toFixed(2).toString().replace('.', ',')}`
    console.log(valorEmReais2 + ' Método 2')
}

brl(0.3000000004)
brl(500)