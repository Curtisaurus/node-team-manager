// const { exportAllDeclaration } = require('babel-types');
// const { iteratee } = require('lodash');
// const { describe } = require('yargs');
const { describe } = require('yargs');
const Employee = require('../lib/employee');

describe("Employee class", () => {
    const employee = new Employee('John', 23, 'username@mail.com');

    describe("Initialization", () => {
        it('should create an object with name, id, and email properties', () => {
            expect(employee.name).toEqual('Curtis');
            expect(employee.id).toEqual(23);
            expect(employee.email).to
        });
    });

    describe("getName method", () => {
        it('returns name property of employee object', () => {
            let name = employee.getName();
            expect(name).toEqual(employee.name);
        });
    });

    describe("getId method", () => {
        it('returns id property of employee object', () => {
            let id = employee.getId();
            expect(id).toEqual(employee.id);
        });
    });

    describe("getEmail method", () => {
        it('returns email property of employee object', () => {
            let email = employee.getEmail();
            expect(email).toEqual(employee.email);
        });
    });

    describe("getRole method", () => {
        it('returns "employee" string', () => {
            let role = employee.getRole();
            expect(role).toEqual('Employee');
        });
    });
})