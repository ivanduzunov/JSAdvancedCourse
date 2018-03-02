function getPersons() {
    class Person {
        constructor(firstName, lastName, age, email) {
            this.firstName = firstName
            this.lastName = lastName
            this.age = age
            this.email = email
        }

        toString() {
            return `${this.firstName} ${this.lastName} (age: ${this.age}, email: ${this.email})`
        }
    }

    let first = new Person('Maria', 'Petrova', 22,'mp@yahoo.com')
    let second = new Person('SoftUni')
    let third = new Person('Stephan', 'Nikolov', 25)
    let fourth = new Person('Peter', 'Kolev', 24,'ptr@gmail.com')

    let result = []
    result.push(first)
    result.push(second)
    result.push(third)
    result.push(fourth)

    return result
}