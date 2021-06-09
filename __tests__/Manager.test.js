const Manager = require('../lib/manager');

describe("Manager subclass", () => {
    const manager = new Manager('John', 23, 'username@mail.com', 101);

    describe("Initialization", () => {
        it('should create an object with name, id, and email properties', () => {
            expect(manager.name).toEqual('John');
            expect(manager.id).toEqual(23);
            expect(manager.email).toEqual('username@mail.com')
            expect(manager.officeNumber).toEqual(101)
        });
    });

    describe("getRole method", () => {
        it('returns "Manager" string', () => {
            let role = manager.getRole();
            expect(role).toEqual('Manager');
        });
    });
})