function mediaAluno(codAluno, nota1, nota2, nota3) {
    let notas = []
    notas.push(nota1)
    notas.push(nota2)
    notas.push(nota3)
    notas.sort((a,b) => a < b ? 1 : -1)

    mediaFinal = (((notas[0] * 4) + (notas[1] * 3) + (notas[2] * 3)) / 10).toFixed(2)
    const situacao = media => media >= 5 ? 'APROVADO' : 'REPROVADO'

    return `CodAluno[${codAluno}] N1 = ${nota1}. N2 = ${nota2}. N3 = ${nota3}, Média = ${mediaFinal}. Situação: ${situacao(mediaFinal)}`
}   

console.log(mediaAluno(101, 5, 5, 4))
console.log(mediaAluno(102, 7.1, 6.6, 3.9))