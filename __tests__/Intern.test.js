
const Intern = require("../lib/Intern");


it('We can check if the newIntern called the class constructor', () => {
    const newIntern = new Intern("Jeff", 1, "j2@gmail.com", "UofA");
    expect(newIntern).toEqual({ name: "Jeff", id: 1, email: "j2@gmail.com", school: "UofA" })
});