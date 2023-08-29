function reverseArray(array) {
    let result = []
    for (let index = array.length - 1; index >= 0; index--) {
        result.push(array[index])
    }
    return result;
}

function reverseArrayinPlace(array) {
    for (let index = array.length - 1; index >= 0; index--) {
        let lastel = array.pop()
        array.unshift(lastel)
    }
    return array
}



console.log(reverseArray([1, 2, 3, 4, 5]))
console.log(reverseArrayinPlace([1, 2, 3, 4, 5]))
