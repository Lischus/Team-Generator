const inquirer = require("inquirer")
const fs = require('fs');
const path = require('path')
const template = require("./src/template")
const { createElement } = require("parse5/lib/tree-adapters/default");
const Manager = require("./lib/Manager")
const teamMembers = []
const outputDirectory = path.resolve(__dirname, "dist")
const outputPath = path.join(outputDirectory, "index.html")

function menu() {
    function createManager() {
        inquirer.prompt([
            {
                type: "input",
                message: "Who is the manager of your team?",
                name: "managerName",
                validate: answer => {
                    if (answer !== "") {
                        return true
                    }
                    return "Please enter a name."
                }
            },
            {
                type: "input",
                message: "What is the ID of your Manager?",
                name: "managerID",
                validate: answer => {
                    if (answer !== "") {
                        return true
                    }
                    return "Please enter an ID."
                }
            },
            {
                type: "input",
                message: "What is your manager's email?",
                name: "managerEmail",
                validate: answer => {
                    if (answer !== "") {
                        return true
                    }
                    return "Please enter an email address."
                }
            },
            {
                type: "input",
                message: "What is your manager's office number?",
                name: "managerOffice",
                validate: answer => {
                    if (answer !== "") {
                        return true
                    }
                    return "Please enter an office number."
                }
            },
        ])
            .then((manager) => {
                const managerObject = new Manager(manager.managerName, manager.managerID, manager.managerEmail, manager.managerOffice);
                teamMembers.push(managerObject)
                createTeam()
            })
    };
    function createTeam() {
        inquirer.prompt([
            {
                type: "list",
                message: "What team members would you like to add?",
                name: "choices",
                choices: ["Engineer", "Intern", "None"]
            },
        ]).then((teamChoice) => {
            switch (teamChoice.choices) {
                case "Engineer":
                    createEngineer()
                    break;
                case "Intern":
                    createIntern()
                    break;
                default:
                    buildingOurTeam()
            }
        })
    };
    function createEngineer() {
        inquirer.prompt([
            {
                type: "input",
                message: "Who is the engineer of your team?",
                name: "engineerName",
                validate: answer => {
                    if (answer !== "") {
                        return true
                    }
                    return "Please enter a name."
                }
            },
            {
                type: "input",
                message: "What is the ID of your engineer?",
                name: "engineerID",
                validate: answer => {
                    if (answer !== "") {
                        return true
                    }
                    return "Please enter an ID."
                }
            },
            {
                type: "input",
                message: "What is your engineer's email?",
                name: "engineerEmail",
                validate: answer => {
                    if (answer !== "") {
                        return true
                    }
                    return "Please enter an email address."
                }
            },
            {
                type: "input",
                message: "What is your engineer's Github username?",
                name: "engineerGithub",
                validate: answer => {
                    if (answer !== "") {
                        return true
                    }
                    return "Please enter an office number."
                }
            },
        ])
        .then((engineer) => {
            createTeam()
        })
    };
    function createIntern() {
        inquirer.prompt([
            {
                type: "input",
                message: "Who is the intern of your team?",
                name: "internName",
                validate: answer => {
                    if (answer !== "") {
                        return true
                    }
                    return "Please enter a name."
                }
            },
            {
                type: "input",
                message: "What is the ID of your intern?",
                name: "internID",
                validate: answer => {
                    if (answer !== "") {
                        return true
                    }
                    return "Please enter an ID."
                }
            },
            {
                type: "input",
                message: "What is your intern's email?",
                name: "internEmail",
                validate: answer => {
                    if (answer !== "") {
                        return true
                    }
                    return "Please enter an email address."
                }
            },
            {
                type: "input",
                message: "What is your intern's school?",
                name: "internSchool",
                validate: answer => {
                    if (answer !== "") {
                        return true
                    }
                    return "Please enter an office number."
                }
            },
        ])
        .then((intern) => {
            createTeam()
        })
    };
    function buildingOurTeam() {
        fs.writeFile(outputPath, template(teamMembers), "utf-8")
    };
    createManager();
}

menu();