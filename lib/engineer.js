const Employee = require('./employee');

class Engineer extends Employee {
    constructor (name, id, email, github) {
        // uses Employee class to build name, id, and email properties
        super(name, id, email);
        // new subclass property
        this.github = github;
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