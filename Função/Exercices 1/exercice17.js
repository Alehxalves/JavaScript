function aumentoSalario(plano, salarioAtual) {
    switch (plano) {
        case 'A':
            salarioAtual += salarioAtual * 0.1
            console.log(`Novo salário: ${salarioAtual}`)
            break
        case 'B':
            salarioAtual += salarioAtual * 0.15
            console.log(`Novo salário: ${salarioAtual}`)
            break
        case 'C':
            salarioAtual += salarioAtual * 0.2
            console.log(`Novo salário: ${salarioAtual}`)
            break
    
        default:
            console.log('Plano inválido')
            break;
    }
}   

aumentoSalario('A', 1000)
aumentoSalario('B', 1500)
aumentoSalario('C', 2000)
aumentoSalario('z', 5000)