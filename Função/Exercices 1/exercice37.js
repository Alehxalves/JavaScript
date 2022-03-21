function progressaoAritmetica(n, a1, r, cont = 0) {
    let progressaoAri = a1
    cont++

    if(n > 1) {
        console.log(`A${(cont) % progressaoAri} = ${progressaoAri}`)
        progressaoAri += r

        return progressaoAritmetica(n - 1, progressaoAri, r, cont)
    } else {
        console.log(`A${cont} = ${progressaoAri}\n`)
        console.log('Soma = ' + soma)
    }
}

function progressaoGeometrica(n, a1, q, cont = 0) {
    let progressaoGeo = a1
    cont++

    if(n > 1) {
        console.log(`A${cont} = ${progressaoGeo}`)
        progressaoGeo *= q

        return progressaoGeometrica(n - 1, progressaoGeo, q, cont)
    } else {
        console.log(`A${cont} = ${progressaoGeo}`)
    }
}

progressaoAritmetica(10, 10, 15)
console.log('\n')
progressaoGeometrica(20, 2, 2)