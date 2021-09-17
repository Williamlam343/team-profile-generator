const Employee = require("./lib/Employee")
const Manager = require("./lib/Manager")


const tucker = new Manager("Tucker", 1, "@gmail", 101)
console.log(tucker.getRole())
