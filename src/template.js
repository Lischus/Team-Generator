function generateTeam(team) {
    function generateManagerCard(manager) {
        return `<div class = "card">${manager.getName()}</div>`
    }
    function generateEngineerCard(engineer) {

    }
    function generateInternCard(intern) {

    }
    const html = []
    for(i = 0; i < team.length; i++) {
        if (team[i].getRole() === "Manager") {
            generateManagerCard(team[i])
        } else if (team[i].getRole() === "Engineer") {
            generateEngineerCard(team[i])
        } else if (team[i].getRole() === "Intern") {
            generateInternCard(team[i])
        }
    }

    return html
}

module.exports = team => {
    return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" />
        <title>Document</title>
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