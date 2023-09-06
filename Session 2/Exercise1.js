function squareList(array) {
    return array
        .filter(n => n > 0 && n % 1 == 0)
        .map(n => n * n)

}


const squaredIntegers = squareList([-3, 4.8, 5, 3, -3.2])
console.log(squaredIntegers)