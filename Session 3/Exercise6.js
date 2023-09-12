class Person {
    #name
    #age
    constructor(name, age) {
        this.#name = name,
            this.#age = age
    }
    getName() {
        return this.#name
    }
    setName(newName) {
        this.#name = newName
    }
    getAge() {
        return this.#age

    }
    setAge(newAge) {
        this.#age = newAge

    }
    toString() {
        return `Name:${this.#name} | Age:${this.#age}`
    }
    equals(person) {
        return person.name === this.#name && person.age === this.#age;
    }
}

class Employee {
    #salary
    #person
    constructor({ name, age, salary }) {
        this.#person = new Person(name, age),
            this.#salary = salary
    }
    getSalary() {
        return this.#salary

    }
    setSalary(newSalary) {
        this.#salary = newSalary

    }
    toString() {
        return `Person (${this.#person.toString()} Salary ${this.#salary})`

    }
    equals(employee) {
        return employee.salary === this.#salary && this.#person.equals(employee.person);
    }
}





// Your code here.

const santa = new Employee({ name: "Santa Clause", age: 1752, salary: 0 })
console.log(santa.toString())
// → Name: Santa Clause, Age: 1752, Salary: 0