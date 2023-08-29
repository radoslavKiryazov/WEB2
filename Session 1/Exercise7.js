
function range(start) {
    return function (end) {
        let list = []
        for (let index = start; index <= end; index++) {
            list.push(index)
        }
        return list;
    }
}

let rangeFrom3to = range(3)
let rangeFrom7to = range(7)

console.log(rangeFrom3to(3))
console.log(rangeFrom3to(8))
console.log(rangeFrom7to(9))