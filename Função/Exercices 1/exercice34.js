function stringsEquals(str1, str2) {
    if(str1.length != str2.length) { return false }

    for (let i in str1) {
        let contem = false
    
        for(let j in str2){
            if (str1[i] == str2[j] || str1[i].toUpperCase() == str2[j].toUpperCase()) {
                contem = true
            }
        }

        if (contem == false) { return false }
    }

    return true
}

console.log(stringsEquals('abce', 'cbad'))
console.log(stringsEquals('abc', 'cba'))
console.log(stringsEquals('123', '2132'))