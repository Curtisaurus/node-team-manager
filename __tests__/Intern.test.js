const Intern = require('../lib/intern');

describe("intern subclass", () => {
    const intern = new Intern('John', 23, 'username@mail.com', 'MSU');

    describe("Initialization", () => {
        it('should create an object with name, id, and email properties', () => {
            expect(intern.name).toEqual('John');
            expect(intern.id).toEqual(23);
            expect(intern.email).toEqual('username@mail.com')
            expect(intern.school).toEqual('MSU')
        });
    });

    describe("getSchool method", () => {
        it('returns school property of intern object', () => {
            let school = intern.getSchool();
            expect(school).toEqual(intern.school);
        });
    });

    describe("getRole method", () => {
        it('returns "Intern" string', () => {
            let role = intern.getRole();
            expect(role).toEqual('Intern');
        });
    });
})