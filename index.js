console.clear()
const Employee = require("./lib/Employee")
const Manager = require("./lib/Manager")
const inquirer = require("inquirer")


// THEN I am prompted to enter the team manager’s name, employee ID, email address, and office number
const managerQuestions = [
    {
        type: 'input',
        name: 'managerName',
        message: 'Enter team manager name',
    },
    {
        type: 'number',
        name: 'ID',
        message: 'Enter employee ID',
        validate(value) {
            if (Number.isInteger(value)) {
                return true;
            }
            return 'Please enter a number';
        },
    },
    {
        type: 'input',
        name: 'email',
        message: 'Enter email address',
    },
    {
        type: 'number',
        name: 'officeNumber',
        message: 'Enter office number',
        validate(value) {
            if (Number.isInteger(value)) {
                return true;
            }
            return 'Please enter a number';
        },
    }
]

// THEN I am presented with a menu with the option to add an engineer or an intern or to finish building my team
const buildTeamQuestions = [
    {
        type: 'list',
        name: 'menu',
        choices: ["Add an Engineer", "Add an Intern", "Finish building team"],
        message: 'What would you like to do?',
    },
]

function buildTeam(choice) {
    switch (choice) {
        // WHEN I select the engineer option
        // THEN I am prompted to enter the engineer’s name, ID, email, and GitHub username, and I am taken back to the menu
        case "Add an Engineer":
            inquirer.prompt(engineerQuestions)
            break;
        // WHEN I select the intern option
        // THEN I am prompted to enter the intern’s name, ID, email, and school, and I am taken back to the menu
        case "Add an Intern":
            inquirer.prompt(internQuestions)
            break;

        default:
            // WHEN I decide to finish building my team
            // THEN I exit the application, and the HTML is generated

            break;
    }
}

function init() {
    inquirer
        .prompt(managerQuestions)
        .then((resp) => {
            console.log(resp, `Welcome ${resp.managerName}!`),
                inquirer.prompt(buildTeamQuestions).then((choice) => {
                    console.log(choice);
                    // buildTeam(choice.menu)
                })

        })

}

init()
// const tucker = new Manager("Tucker", 1, "@gmail", 101)
// console.log(tucker.getRole())
