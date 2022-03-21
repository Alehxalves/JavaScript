const despesasTotais = ([
    { nome: "Jornal online", categoria: "Informação", preco: 89.99 }, 
    { nome: "Cinema", categoria: "Entretenimento", preco: 150 } 
])

function calcularDespesas(despesas) {
    const separarPrecoDespesas = despesa => despesa.preco;
    const somarDespesas = (acumulador, atual) => acumulador + atual;

    return despesas.map(separarPrecoDespesas).reduce(somarDespesas, 0);
}

console.log(calcularDespesas(despesasTotais));

const despesasTotais2 = ([ 
    {nome: "Galaxy S20", categoria: "Eletrônicos", preco: 3599.99}, 
    {nome: "Macbook Pro", categoria: "Eletrônicos", preco: 30999.90} 
])

console.log(calcularDespesas(despesasTotais2));

