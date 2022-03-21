function checarAnoIsBissexto(ano) {
    if (ano % 4 == 0) {
        if(ano % 100 == 0) {
            return ano % 400 == 0;
        } else{
            return true;
        }
    }
}

function checarAnoIsBissexto2(ano) {
    return new Date(ano, 1, 29).getDate() == 29;
}

console.log(checarAnoIsBissexto(2020));
console.log(checarAnoIsBissexto(2100));

console.log(checarAnoIsBissexto2(2016));
console.log(checarAnoIsBissexto2(2300));

