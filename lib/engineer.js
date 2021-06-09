const Employee = require('./employee');

class Engineer extends Employee {
    constructor (name, id, email, github) {
        // new subclass property
        this.github = github;
         // uses Employee class to build name, id, and email properties
        super(name, id, email);
    }

    getGithub() {
        return this.github;
    }

    // overrides 'Employee'
    getRole() {
        return 'Engineer';
    }
}

module.exports = Engineer;