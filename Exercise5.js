let countChar = (value, char) => {
    let counter = 0;
    for (let index = 0; index < value.length; index++) {
        if (value[index] == char) { counter++ }
    }
    return counter;
}

let countBs = (value) => countChar(value, "B")

console.log(countChar("OwO", "O"))
console.log(countBs("BOBBY", "B"))