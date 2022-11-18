const inquirer = require('inquirer')
const Engineer = require('./lib/Engineer')
const Intern = require('./lib/Intern')
const Manager = require('./lib/Manager')

const managers = []
const engineers = []
const interns = []

init = () => {
    let employee = {}
    inquirer
        .prompt([
            {
                type: 'list',
                message: "What kind of employee do you need a card for?",
                choices: ["Manager", "Engineer", "Intern"],
                name: 'employeeType'
            }]).then((response) => {
                employee.type = response.employeeType
                if (response.employeeType == 'Manager') {
                    var question = 'Office Number: '
                } else if (response.employeeType == 'Engineer') {
                    var question = 'Github Username: '
                } else {
                    var question = "School: "
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
                            .prompt([{
                                type: 'list',
                                message: 'Would you like to add another team member?',
                                choices: ['Yes', 'No'],
                                name: 'addMore'
                            }
                    ]).then((response) => {
                        if (response.addMore == 'Yes') {
                            init()
                        }
                    })
                    })
            })
}

createEmployee = (x) => {
    if (x.type == 'Manager') {
        managers.push(new Manager(x.name, x.id, x.email, x.arg))
    } else if (x.type == 'Engineer') {
        engineers.push(new Engineer(x.name, x.id, x.email, x.arg))
    } else {
        interns.push(new Intern(x.name, x.id, x.email, x.arg))
    }
}

init()