var mysql = require('mysql')

var connection = mysql.createConnection({
    host: 'location',
    user: 'root',
    password: '12345678',
    database: 'mysql'
})

connection.connect()

connection.query('SELECT * FROM user', (err, result, fields)=>{
    if (err) {
        throw err
    }
    console.log(result);
})

connection.end()