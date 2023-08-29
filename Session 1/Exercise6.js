let range = (start, end) => {
    let list = []
    for (let index = start; index <= end; index++) {
        list.push(index)

    }
    return list;
}

let sum = (list) => {
    let rslt = 0
    for (let value of list) {
        rslt += value
    }
    return rslt
}

console.log(range(1, 2))
console.log(sum(range(1, 2)))