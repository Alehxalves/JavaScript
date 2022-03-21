function calcularSalario(hrsTrabalhadas, valorHora) {
    const imposto = 0.3;
    const salarioBruto = (hrsTrabalhadas * valorHora);
    const salarioLiquido = salarioBruto - (salarioBruto * imposto);

    return `Salário igual à R$ ${salarioLiquido}`;
}

console.log(calcularSalario(150, 40.5));
console.log(calcularSalario(180, 60));
