const Manager = require("../lib/Manager");


it('We can check if the newManager called the class constructor', () => {
    const newManager = new Manager("Jeff", 1, "j2@gmail.com", 101);
    expect(newManager).toEqual({ name: "Jeff", id: 1, email: "j2@gmail.com", officeNumber: 101 })
});