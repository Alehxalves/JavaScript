function concessionariaRevenda(modelo) {
    switch (modelo) {
        case 'hatch':
            return 'Compra efetuada com sucesso.'
        case 'sedan':
        case 'motocicleta':
        case 'caminhonete':
            return 'Tem certeza que não prefere outro modelo?'
        default:
            return 'Não trabalhamos com este tipo de automóvel aqui.'
    }
}

console.log(concessionariaRevenda('sedan'))
console.log(concessionariaRevenda('hatch'))
console.log(concessionariaRevenda('motocicleta'))
console.log(concessionariaRevenda('caminhonete'))
console.log(concessionariaRevenda('ferrari'))