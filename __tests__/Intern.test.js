
const Intern = require("../lib/Intern");


it('We can check if the employeee called the Intern class constructor', () => {
    const name = "Jeff"
    const id = 1
    const email = "j2@gmail.com"
    const school = "UofA"

    if (typeof name !== "string" && name.length !== 0) {
        throw new Error("argument must be a string")
    }
    if (typeof id !== "number" && id.length !== 0) {
        throw new Error("argument must be a number")
    }
    if (typeof email !== "string" && email.length !== 0) {
        throw new Error("argument must be a string")
    }
    if (typeof school !== "string" && school.length !== 0) {
        throw new Error("argument must be a string")
    }

    const employee = new Intern(name, id, email, school);

    expect(employee).toEqual({ name: "Jeff", id: 1, email: "j2@gmail.com", school: "UofA" })
});