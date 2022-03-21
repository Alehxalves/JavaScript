function feiraDeFrutas(fruta) {
    switch (fruta) {
        case 'maçã':
            console.log('Não vendemos esta fruta aqui')
            break;
        case 'kiwi':
            console.log('Estamos com escassez de kiwis')
            break
        case 'melancia':
            console.log('Aqui está, são 3 reais o quilo')
            break
        default:
            console.log('ERROR! fruta inválida')
            break;
    }
}

feiraDeFrutas('maçã')
feiraDeFrutas('kiwi')
feiraDeFrutas('melancia')
feiraDeFrutas('banana')
feiraDeFrutas(12)