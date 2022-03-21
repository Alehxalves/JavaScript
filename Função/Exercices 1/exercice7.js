function bhaskara(ax2, bx, c) {
    const delta = (bx ** 2) - (4 * ax2 * c)

    if (delta < 0) { return 'Delta é negativo' }
    else {
        let result = []
        let x1 = (-(bx) + Math.sqrt(delta)) / (2 * ax2)
        let x2 = (-(bx) - Math.sqrt(delta)) / (2 * ax2)
        result.push(x1)
        result.push(x2)

        return `X'  = ${result[0]}\nX'' = ${result[1]}`
    }
}   

console.log(bhaskara(1, 3, 2))
console.log(bhaskara(3, 1, 2))