const mysql = require('mysql');
const dbConfig = require('./../config/db.config.js');

const connection = mysql.createConnection({
    host: dbConfig.HOST,
    database: dbConfig.DB,
    user: dbConfig.USER,
    password: dbConfig.PASSWORD
});
connection.connect((error) =>{
    if (error) throw error;
    console.log("connected to the database");
});

module.exports = connection;