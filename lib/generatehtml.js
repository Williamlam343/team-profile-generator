
function buildCard(employleeList) {
  console.log("Team List:")
  console.log(employleeList)
  employleeList.forEach(function (data) {
    console.log(data.getRole())
    // check the role of the person
    switch (data.getRole()) {
      // if Manager build and return a manager card
      case "Manager":
        `<div class="card employee-card">
                <div class="card-header">
                  <h2 class="card-title">${data.name}</h2>
                  <h3 class="card-title">
                    <i class="fas fa-mug-hot mr-2"></i>${data.getRole()}
                  </h3>
                </div>
                <div class="card-body">
                  <ul class="list-group">
                    <li class="list-group-item">ID: ${data.id}</li>
                    <li class="list-group-item">
                      Email: <a href="${data.email}">${data.email}/a>
                    </li>
                    <li class="list-group-item">Office number:${data.getOfficeNumber()}</li>
                  </ul>
                </div>
              </div>
                `
        break;
      // if Engineer build and return an enginner card
      case "Engineer":

        `
              <div class="card employee-card">
              <div class="card-header">
                <h2 class="card-title">${data.name}</h2>
                <h3 class="card-title">
                  <i class="fas fa-mug-hot mr-2"></i>${data.getRole()}
                </h3>
              </div>
              <div class="card-body">
                <ul class="list-group">
                  <li class="list-group-item">ID: ${data.id}</li>
                  <li class="list-group-item">
                    Email: <a href="${data.email}">${data.email}/a>
                  </li>
                  <li class="list-group-item">Github:${data.getGithub()}</li>
                </ul>
              </div>
            </div>
            `
        break;
      // if Intern build and return an intern card
      case "Intern":
        `
              <div class="card employee-card">
              <div class="card-header">
                <h2 class="card-title">${data.name}</h2>
                <h3 class="card-title">
                  <i class="fas fa-mug-hot mr-2"></i>${data.getRole()}
                </h3>
              </div>
              <div class="card-body">
                <ul class="list-group">
                  <li class="list-group-item">ID: ${data.id}</li>
                  <li class="list-group-item">
                    Email: <a href="${data.email}">${data.email}/a>
                  </li>
                  <li class="list-group-item">Schoool:${data.getSchool()}</li>
                </ul>
              </div>
            </div>
            `
        break;

      default:
        break;
    }
  })
}


function generatehtml(data) {

  return `<!DOCTYPE html>
    <html lang="en">
      ​
      <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta http-equiv="X-UA-Compatible" content="ie=edge" />
        <title>My Team</title>
        <link
          rel="stylesheet"
          href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
          integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T"
          crossorigin="anonymous"
        />
        <link rel="stylesheet" href="style.css" />
        <script src="https://kit.fontawesome.com/c502137733.js"></script>
      </head>
      ​
      <body>
        <div class="container-fluid">
          <div class="row">
            <div class="col-12 jumbotron mb-3 team-heading">
              <h1 class="text-center">My Team</h1>
            </div>
          </div>
        </div>
        <div class="container">
          <div class="row">
            <div class="team-area col-12 d-flex justify-content-center">` + data + `</div>
            </div>
          </div>
        </body>
      </html>`
}


module.exports = buildCard; generatehtml;