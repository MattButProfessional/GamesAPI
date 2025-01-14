// This will make the connection to our database.
const mysql = require("mysql2/promise") // Using promise for async behavior

const pool = mysql.createPool({
    host: "local",
    user: "yourUserName",
    password: "yourPassword",
    database: "igdb",
    port: 3306,
})

module.exports = pool
