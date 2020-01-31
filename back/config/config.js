require('dotenv').config(process.cwd(), '.env')
const mysql = require('mysql')
const db_name = ''
const db_port = 3306

const connection = mysql.createConnection({
    host: process.env.DB_HOST,
    port : process.env.DB_PORT,
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME
}) 

connection.connect(function (err) {
    if (!err) {
        console.log(`😎😎 -- MySql is connected on ${db_name}'s database on port ${db_port} -- 😎😎`);
    } else {
        console.log("-- 👎 👎  -- Error connecting MySql : -- 👎 👎 -- ", err);
    }
});

module.exports = connection