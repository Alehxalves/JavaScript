const aprovados = ['Alex', 'Emanuel', 'Ester', 'Eduardo'];

// Foreac retorna 1 conteudo armazenado, 2 indice, 3 o próprio array.
aprovados.forEach(function(nome, indice) {
    console.log(`${indice + 1}) ${nome}`);
})

aprovados.forEach(nome => console.log(nome));

const exibirAprovados = (aprovado, indice) => console.log((indice + 1) + '| ' + aprovado);
aprovados.forEach(exibirAprovados);
