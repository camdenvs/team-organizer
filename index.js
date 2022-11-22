const inquirer = require('inquirer')
const fs = require('fs')
const Engineer = require('./lib/Engineer')
const Intern = require('./lib/Intern')
const Manager = require('./lib/Manager')
const generateHTML = require('./src/generateHTML')

const allEmployees = []
const managers = []
const engineers = []
const interns = []

init = () => {
    inquirer
        .prompt([
            {
                type: 'input',
                message: 'Manager Name: ',
                name: 'managerName'
            },
            {
                type: 'input',
                message: "Manager Id: ",
                name: 'managerId'
            },
            {
                type: 'input',
                message: "Manager Email: ",
                name: 'managerEmail'
            },
            {
                type: 'input',
                message: 'Office Number: ',
                name: 'officeNumber'
            }
        ]).then((response) => {
            managers.push(new Manager(response.managerName, response.managerId, response.managerEmail, response.officeNumber))
            console.log(`\x1b[36m${response.managerName} has been added as manager!\x1b[0m`)
            inquirer
                .prompt([
                    {
                        type: 'list',
                        message: 'Would you like to add more team members or finish building your team now?',
                        choices: ['Add more', 'Finish making my team'],
                        name: 'continue'
                    }
                ]).then((response) => {
                    if (response.continue == 'Add more') {
                        newEmployee()
                    } else {
                        allEmployees.push(...managers, ...engineers, ...interns)
                        fs.writeFile('./dist/my-team.html', generateHTML(allEmployees), (err) => {
                            if (err)
                                console.log(err);
                            else {
                                console.log(`\x1b[36mHTML file created!\x1b[0m`)
                            }
                        })
                    }
                })
        })
}

createEmployee = (x) => {
    if (x.type == 'Engineer') {
        engineers.push(new Engineer(x.name, x.id, x.email, x.arg))
    } else {
        interns.push(new Intern(x.name, x.id, x.email, x.arg))
    }
}

newEmployee = () => {
    let employee = {}
    inquirer
        .prompt([
            {
                type: 'list',
                message: "What kind of employee do you need a card for?",
                choices: ["Engineer", "Intern"],
                name: 'employeeType'
            }]).then((response) => {
                if (response.employeeType == 'Engineer') {
                    var question = 'Github Username: '
                    employee.type = 'Engineer'
                } else {
                    var question = "School: "
                    employee.type = 'Intern'
                }
                inquirer
                    .prompt([{
                        type: 'input',
                        message: "Employee Name: ",
                        name: 'employeeName'
                    },
                    {
                        type: 'input',
                        message: "Employee Id: ",
                        name: 'employeeId'
                    },
                    {
                        type: 'input',
                        message: "Employee Email: ",
                        name: 'employeeEmail'
                    },
                    {
                        type: 'input',
                        message: question,
                        name: 'employeeArg'
                    }
                    ]).then((response) => {
                        employee.name = response.employeeName
                        employee.id = response.employeeId
                        employee.email = response.employeeEmail
                        employee.arg = response.employeeArg
                        createEmployee(employee)
                        let text = `${employee.name} has been added to the team!`
                        console.log(`\x1b[36m${text}\x1b[0m`)
                    }).then(() => {
                        inquirer
                            .prompt([
                                {
                                    type: 'list',
                                    message: 'Would you like to add more team members or finish building your team now?',
                                    choices: ['Add more', 'Finish making my team'],
                                    name: 'continue'
                                }
                            ]).then((response) => {
                                if (response.continue == 'Add more') {
                                    newEmployee()
                                } else {
                                    allEmployees.push(...managers, ...engineers, ...interns)
                                    fs.writeFile('./dist/my-team.html', generateHTML(allEmployees), (err) => {
                                        if (err)
                                            console.log(err);
                                        else {
                                            console.log(`\x1b[36mHTML file created!\x1b[0m`)
                                        }
                                    })
                                }
                            })
                    })
            })
}

init()