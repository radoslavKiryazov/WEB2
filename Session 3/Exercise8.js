let obj = { one: true, two: true, hasOwnProperty: true }



// Fix this call
console.log(Object.hasOwnProperty.call(obj, "one"))
// → true