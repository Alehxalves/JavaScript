function beginEnd(begin, end) {
    if (begin > end) {
        begin += end
        end = begin - end
        begin -= end
    }

    for (let i = begin; i < end; i++) {
        if (i % 2 != 0) {
            console.log(i)
        }
    } 
}

beginEnd(0, 100)
console.log('--------------')
beginEnd(150, 100)