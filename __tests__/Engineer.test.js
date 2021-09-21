
const Engineer = require("../lib/Engineer");


it('We can check if the employee called the class constructor', () => {

    const name = "Jeff"
    const id = 1
    const email = "j2@gmail.com"
    const github = "https://github.com/jeff123"


    if (typeof name !== "string" && name.length !== 0) {
        throw new Error("argument must be a string")
    }
    if (typeof id !== "number" && id.length !== 0) {
        throw new Error("argument must be a number")
    }
    if (typeof email !== "string" && email.length !== 0) {
        throw new Error("argument must be a string")
    }
    if (typeof github !== "string" && github.length !== 0) {
        throw new Error("argument must be a string")
    }

    let employee = new Engineer(name, id, email, github);

    expect(employee).toEqual({ name: "Jeff", id: 1, email: "j2@gmail.com", github: "https://github.com/jeff123" })
});
