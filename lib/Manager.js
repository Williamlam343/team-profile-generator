const Employee = require("./Employee")

class Manager extends Employee {
    constructor(name, id, email, officerNumber) {
        super(name, id, email)
        this.officerNumber = officerNumber
    }

    getOfficerNumber() {
        return this.officerNumber
    }

    getRole() {
        return "Manager"
    }
}

module.exports = Manager;