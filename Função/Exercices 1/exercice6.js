function jurosSimples(capInicial, taxaJuros, timeApli) {
    if(taxaJuros >= 1) { taxaJuros /= 100 }

    return capInicial + (capInicial * taxaJuros * timeApli)
}

function jurosCompostos(capInicial, taxaJuros, timeApli) {
    if (taxaJuros >= 1) { taxaJuros /= 100 }

    //const montante = (capInicial * Math.pow((1 + taxaJuros), timeApli))
    const montante = capInicial * (1 + taxaJuros) ** timeApli

    return montante.toFixed(2)
}

console.log(jurosSimples(100, 10, 2))
console.log(jurosCompostos(10000, 5, 18))