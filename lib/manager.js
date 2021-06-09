const Employee = require('./employee');

class Manager extends Employee {
    constructor (name, id, email, officeNumber) {
        // new subclass property
        this.officeNumber = officeNumber;
        // uses Employee class to build name, id, and email properties
        super(name, id, email);
    }

    // overrides 'Employee'
    getRole() {
        return 'Manager';
    }
}

module.exports = Manager;