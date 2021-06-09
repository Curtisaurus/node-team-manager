const Employee = require('./employee');

class Intern extends Employee {
    constructor (name, id, email, school) {
        // new subclass property
        this.school = school;
         // uses Employee class to build name, id, and email properties
        super(name, id, email);
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