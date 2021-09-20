console.clear()
const Engineer = require("./lib/Engineer")
const Intern = require("./lib/Intern")
const Manager = require("./lib/Manager")
const inquirer = require("inquirer")
const generatehtml = require("./lib/generatehtml")
const fs = require('fs');
let employeeList = []
// THEN I am prompted to enter the team manager’s name, employee ID, email address, and office number
const managerQuestions = [
    {
        type: 'input',
        name: 'name',
        message: 'Enter team manager name:',
    },
    {
        type: 'number',
        name: 'id',
        message: 'Enter employee ID:',
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
        message: 'Enter email address:',
        validate: function (email) {

            valid = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)

            if (valid) {
                return true;
            } else {
                console.log(".  Please enter a valid email")
                return false;
            }
        }

    },
    {
        type: 'number',
        name: 'officeNumber',
        message: 'Enter office number:',
        validate(value) {
            if (Number.isInteger(value)) {
                return true;
            }
            return 'Please enter a number';
        },
    }
]
const internQuestions = [
    {
        type: 'input',
        name: 'name',
        message: 'Enter intern name:',
    },
    {
        type: 'input',
        name: 'id',
        message: 'Enter intern ID:',
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
        message: 'Enter intern email:',
        validate: function (email) {

            valid = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)

            if (valid) {
                console.log("Great job");
                return true;
            } else {
                console.log(".  Please enter a valid email")
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'school',
        message: 'Enter intern school:',
    },

]
const engineerQuestions = [
    {
        type: 'input',
        name: 'name',
        message: 'Enter engineer name:',
    },
    {
        type: 'input',
        name: 'id',
        message: 'Enter engineer ID:',
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
        message: 'Enter engineer email:',
        validate: function (email) {

            valid = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)

            if (valid) {
                console.log("Great job");
                return true;
            } else {
                console.log(".  Please enter a valid email")
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'github',
        message: 'Enter engineer github:',
    },
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
            inquirer.prompt(engineerQuestions).then((res) => {
                // create a new Engineer obj 
                let employee = new Engineer(res.name, res.id, res.email, res.github)
                // add into employeeList []
                employeeList.push(employee)
                console.log(employeeList)
                inquirer.prompt(buildTeamQuestions)
                    .then((choice) => {
                        buildTeam(choice.menu)
                    })
            }
            )
            break;
        // WHEN I select the intern option
        // THEN I am prompted to enter the intern’s name, ID, email, and school, and I am taken back to the menu
        case "Add an Intern":
            inquirer.prompt(internQuestions).then((res) => {
                // create a new Intern obj
                let employee = new Intern(res.name, res.id, res.email, res.school)
                // add into employeeList []
                employeeList.push(employee)
                console.log(employeeList)
                // brings manager back to menu
                inquirer.prompt(buildTeamQuestions).then((choice) => {
                    buildTeam(choice.menu)
                })
            })
            break;
        default:
            // WHEN I decide to finish building my team
            // THEN I exit the application, and the HTML is generated
            console.log(`Team builder completed!\n`)
            console.log("=============================================")
            writeToFile("./dist/profileBuilder.html", generatehtml(employeeList))
    }
}


// function to generate the HTML
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) =>
        err ? console.log(err) : console.log('HTML generated')
    );
}


function init() {
    inquirer
        .prompt(managerQuestions)
        .then((resp) => {
            console.log("=============================================")
            console.log(`Welcome ${resp.name}!\n`);
            // create a new Manager obj 
            let employee = new Manager(resp.name, resp.id, resp.email, resp.officeNumber)
            // add into employee [{}]
            employeeList.push(employee)
            inquirer.prompt(buildTeamQuestions).then((choice) => {
                buildTeam(choice.menu)
            })

        })

}

init()

// const tucker = new Intern("Tucker", 1, "@gmail", 101)
// console.log(tucker.getRole())
