const Engineer = require("../lib/Engineer")
const Manager = require("../lib/Manager")

createCard = (employeeArray) => {
    const cardObjects = []
    
    employeeArray.forEach(employee => {
        if (employee instanceof Manager) {
            var symbol = '../src/cafe-32.png'
            var lastArg = `Office Number: ${employee.officeNumber}`
        } else if (employee instanceof Engineer) {
            var symbol = '../src/wrench-32.png'
            var lastArg = `Github: <a rel="noreferrer noopener" href="https://github.com/${employee.github}" target="_blank">${employee.github}</a> `
        } else {
            var symbol = '../src/book-32.png'
            var lastArg = `School: ${employee.school}`
        }
        cardObjects.push(`  <div class="shadow-lg card w-25 rounded border-2 border-dark border-opacity-75">
        <div class="card-body p-0">
            <div class="bg-primary py-2 rounded-top">
                <h3 class="card-title text-light ps-3">${employee.getName()}</h3>
                <h4 class="card-title text-light ps-3"><img src="${symbol}"><span class="align-bottom"> ${employee.getRole()}</span></h4>
            </div>
            <div class="container-fluid py-4 bg-secondary bg-opacity-25 rounded-bottom">
            <p class="border card-text my-0 p-2 bg-light">${employee.getId()}</p>
            <p class="border card-text my-0 p-2 bg-light">${employee.getEmail()}</p>
            <p class="border card-text my-0 p-2 bg-light">${lastArg}</p>
            </div>
        </div>
    </div>`)
    })
    
    const htmlTemplate = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>My Team</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-Zenh87qX5JnK2Jl0vWa8Ck2rdkQ2Bzep5IDxbcnCeuOxjzrPF/et3URy9Bv1WTRi" crossorigin="anonymous">
</head>
<body>
    <header class="card bg-primary rounded-0">
        <h1 class="card-body text-light mx-auto p-4">My Team</h1>
    </header>

    <div class="d-flex container mt-5 justify-content-center gap-3 flex-wrap">
    ${cardObjects.join('\n')}
    </div>
</body>
</html>`

    return htmlTemplate
}

module.exports = createCard