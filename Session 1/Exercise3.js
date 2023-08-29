for (let index = 0; index <= 100; index++) {
    let output = ""
    if(index % 3 == 0) {
        output += "Fizz"
    }
    if(index % 5 == 0 ){
        output += "Buzz"
    }
    if (output == "") {
        output = index
    }
    console.log(output)
}