function generateTeam(team) {
    function generateManagerCard(manager) {
        return `<div class = "card">
        <div class = "card-header">${manager.getName()}</div>
        <div class = "card-role">${manager.getRole()}</div>
        <div class = "card-ID">ID Number: ${manager.getID()}</div>
        <div class = "card-email">Email Address: <a href="mailto:${manager.getEmail()}">${manager.getEmail()}</a></div>
        <div class = "card-bottom">Office Number: ${manager.getOfficeNumber()}</div>
        </div>`
    }
    function generateEngineerCard(engineer) {
        return `<div class = "card">
        <div class = "card-header">${engineer.getName()}</div>
        <div class = "card-role">${engineer.getRole()}</div>
        <div class = "card-ID">ID Number: ${engineer.getID()}</div>
        <div class = "card-email">Email Address: <a href="mailto:${engineer.getEmail()}">${engineer.getEmail()}</a></div>
        <div class = "card-bottom">Github: <a href="github.com/${engineer.getGithub()}" target='_blank'>${engineer.getGithub()}</a></div>
        </div>`
    }
    function generateInternCard(intern) {
        return `<div class = "card">
        <div class = "card-header">${intern.getName()}</div>
        <div class = "card-role">${intern.getRole()}</div>
        <div class = "card-ID">ID Number: ${intern.getID()}</div>
        <div class = "card-email">Email: <a href="mailto:${intern.getEmail()}">${intern.getEmail()}</a></div>
        <div class = "card-bottom">School: ${intern.getSchool()}</div>
        </div>`
    }
    const html = []
    for (i = 0; i < team.length; i++) {
        if (team[i].getRole() === "Manager") {
            html.push(generateManagerCard(team[i]))
        } else if (team[i].getRole() === "Engineer") {
            html.push(generateEngineerCard(team[i]))
        } else if (team[i].getRole() === "Intern") {
            html.push(generateInternCard(team[i]))
        }
    }

    const noCommas = html.join("");

    return noCommas
}
// console.log(generateTeam())
module.exports = team => {
    return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" />
        <title>Your Team!</title>
    </head>
    <body>
        <div class="container-fluid">
            <div class="row">
                <h1 class="text-center">My Team</h1>
            </div>
        </div>
        <div class = "container">
            <div class="row">
                <div class = "team col-12 d-flex justify-content-center">
                    ${generateTeam(team)}  
                </div>
            </div>
        </div>
        
    </body>
    </html>`
}