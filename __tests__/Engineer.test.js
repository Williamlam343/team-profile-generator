
const Engineer = require("../lib/Engineer");


it('We can check if the newEngineer called the class constructor', () => {
    const newEngineer = new Engineer("Jeff", 1, "j2@gmail.com", "https://github.com/jeff123");
    expect(newEngineer).toEqual({ name: "Jeff", id: 1, email: "j2@gmail.com", github: "https://github.com/jeff123" })
});
