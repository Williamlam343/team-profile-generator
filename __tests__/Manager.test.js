const Manager = require("../lib/Manager");


it('We can check if the employeee called the Manager class constructor', () => {

    const name = "Jeff"
    const id = 5
    const email = "j2@gmail.com"
    const officeNumber = 101

    if (typeof name !== "string" && name.length !== 0) {
        throw new Error("argument must be a string")
    }
    if (typeof id !== "number" && id.length !== 0) {
        throw new Error("argument must be a number")
    }
    if (typeof email !== "string" && email.length !== 0) {
        throw new Error("argument must be a string")
    }
    if (typeof officeNumber !== "number" && officeNumber.length !== 0) {
        throw new Error("argument must be a number")
    }

    const employee = new Manager(name, id, email, officeNumber);

    expect(employee).toEqual({ name: "Jeff", id: 5, email: "j2@gmail.com", officeNumber: 101 })
});