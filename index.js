class Employee {
    constructor(firstname, lastname, email) {
        this.firstname = firstname;
        this.lastname = lastname;
        // Complete the code!
        this.fullname = `${this.firstname} ${this.lastname}`;
        this.email = `${firstname}.${lastname}@company.com`.toLowerCase();
    }
}

emp1 = new Employee("John", "Smith");
console.log(emp1.fullname);

emp2 = new Employee("Mary", "Sue")
console.log(emp2.email);
//➞ "mary.sue@company.com"

emp3 = new Employee("Antony", "Walker")
console.log(emp3.firstname)
// ➞ "Antony"
