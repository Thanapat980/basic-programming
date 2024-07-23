function add(a: number, b: number) {
    return a + b
}

console.log(add(17, 71))


function keepup(a: number , b: number) {
    return a - b
}

console.log(keepup(17, 19))


function option(a: number , b: number , c: number , d: number) {
    return a * b * c * d
}

console.log(option(12, 13, 14, 15))


function grade(homework: number, midterm: number, final: number) {
    let score: number = homework + midterm + final

    if (score < 50) {
        return 'F'
    } else if (score < 60) {
        return 'D'
    } else if (score < 70) {
        return 'C'
    } else if (score < 80) {
        return 'B'
    } else {
        return 'A'
    }
}

console.log(grade(25, 20, 40))

