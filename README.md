# samurai.js
This Js server side framework based on hapi.js.

# status
Project just by begined development.

# Run deveopment

    gulp watch

or

    node app.js --harmony

# Showly on browser

* http://localhost:5200/user/1 -get request from one row
* http://localhost:5200/users -get request from many rows

# CURL
    curl -X GET http://localhost:5200/user/1;echo
    curl -X POST http://localhost:5200/user/1;echo
    curl -X PUT http://localhost:5200/user/1;echo
    curl -X DELETE http://localhost:5200/user/1;echo

# Render templates
    curl -X GET http://localhost:5200/users;echo

Outpad

    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <title>Title</title>
    </head>
    <body>
        Hello World!
    </body>
    </html>

# Testing
    lab tests/unit.js
