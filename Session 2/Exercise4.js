function alphabeticalOrder(array) {
    let result = array;
    return result.sort((a, b) => a === b ? 0 : a < b ? -1 : 1)
}

const letters = ["a", "d", "c", "a", "z", "g"]

console.log(alphabeticalOrder(letters))
// → ["a", "a", "c", "d", "g", "z"]
console.log(letters)
// → [ "a", "d", "c", "a", "z", "g"]