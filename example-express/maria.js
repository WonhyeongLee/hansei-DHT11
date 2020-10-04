const maria = require('mysql');
const conn = maria.createConnection({
    host: 'localhost',
    port: 3306,
    user: 'raspi_user',
    password: '1q2w3e4r',
    database: 'raspi_dht11'
});
module.exports = conn;