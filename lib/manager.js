const Employee = require('./employee');

class Manager extends Employee {
    constructor (name, id, email, officeNumber) {
        // uses Employee class to build name, id, and email properties
        super(name, id, email);
        // new subclass property
        this.officeNumber = officeNumber;
    }

    // overrides 'Employee'
    getRole() {
        return 'Manager';
    }
}

module.exports = Manager;