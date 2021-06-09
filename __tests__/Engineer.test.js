const { exp } = require('prelude-ls');
const Engineer = require('../lib/engineer');

describe("Engineer subclass", () => {
    const engineer = new Engineer('John', 23, 'username@mail.com', 'username');

    describe("Initialization", () => {
        it('should create an object with name, id, and email properties', () => {
            expect(engineer.name).toEqual('John');
            expect(engineer.id).toEqual(23);
            expect(engineer.email).toEqual('username@mail.com')
            expect(engineer.github).toEqual('username')
        });
    });

    describe("getGithub method", () => {
        it('returns github property of engineer object', () => {
            let github = engineer.getGithub();
            expect(github).toEqual(engineer.github);
        });
    });

    describe("getRole method", () => {
        it('returns "Engineer" string', () => {
            let role = engineer.getRole();
            expect(role).toEqual('Engineer');
        });
    });
})