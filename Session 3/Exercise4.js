const createPerson = (name, age) => {
    return {
        getName: () => name,
        getAge: () => age,
        setAge(newAge) {
            age = newAge
        },
        setName(newName) {
            name = newName
        },
        toString: () => `Name: ${name} Age: ${age}`
    };

}

const createEmployee = ({ name, age, salary }) => {
    const person = createPerson(name, age)
    return {
        ...person,
        getSalary: () => salary,
        setSalary(newSalary) {
            salary = newSalary
        },
        toString: () => person.toString()
    };
}



const santa = createEmployee({ name: "Santa Clause", age: 1752, salary: 0 })
console.log(santa.toString())
// → Name: Santa Clause, Age: 1752, Salary: 0