function checkPositive(array) {
    // let bool = false;
    // array.forEach(e => {
    //     e > 0
    //     bool = true;
    // });
    // return bool

    return array.some(a => a > 0)
}

console.log(checkPositive([1, 2, 3, -4, 5]))
// → true