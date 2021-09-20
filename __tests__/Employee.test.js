
const Employee = require("../lib/Employee");


it('We can check if the newEmployee called the class constructor', () => {
    const newEmployee = new Employee("Jeff", 1, "j2@gmail.com");
    expect(newEmployee).toEqual({ name: "Jeff", id: 1, email: "j2@gmail.com" })
});

