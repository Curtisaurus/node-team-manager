const Employee = require('./employee');

class Intern extends Employee {
    constructor (name, id, email, school) {
        // uses Employee class to build name, id, and email properties
        super(name, id, email);
        // new subclass property
        this.school = school;
    }

    getSchool() {
        return this.school;
    }

    // overrides 'Employee'
    getRole() {
        return 'Intern';
    }
}

module.exports = Intern;