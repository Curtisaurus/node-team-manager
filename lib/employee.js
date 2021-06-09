class Employee {
    // creates employee object with name, id, and email properties
    constructor(name, id, email) {
        this.name = name;
        this.id = id;
        this.email = email;
    }

    // methods that return relevant property values
    getName() {
        return this.name;
    }

    getId() {
        return this.id;
    }

    getEmail() {
        return this.email;
    }

    getRole() {
        return 'Employee';
    }
}

module.exports = Employee;