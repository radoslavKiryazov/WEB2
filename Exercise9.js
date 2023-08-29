function arrayToList(array) {
    let list = []
    for (let index = array.length - 1; index >= 0; index--) {
        list = { value: array[index], rest: list }
    }
    return list;
}
console.log(arrayToList([10, 20]))

function listToArray(list) {
    let array = []
    for (let node = list; node; node = node.rest) {
        array.push(node.value)

    }
    return array;
}
console.log(listToArray(arrayToList([10, 20])))


function prepend(element, list) {
    return { element, rest: list }
}
