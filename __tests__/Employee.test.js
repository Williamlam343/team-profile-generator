const Employee = require("../lib/Employee");

it('We can check if the employee called the class constructor', () => {
    // Arrange
    const name = "Jeff"
    const id = 1
    const email = "j2@gmail.com"

    // Act
    if (typeof name !== "string" && name.length !== 0) {
        throw new Error("argument must be a string")
    }
    if (typeof id !== "number" && id.length !== 0) {
        throw new Error("argument must be a number")
    }
    if (typeof email !== "string" && email.length !== 0) {
        throw new Error("argument must be a string")
    }
    let employee = new Employee(name, id, email);

    // Assert
    expect(employee).toEqual({ name: "Jeff", id: 1, email: "j2@gmail.com" })
});

