/**The pool object created below will allow you to query into the database that it’s connected to */


const Pool = require('pg').Pool
const pool = new Pool({
  user: 'xuxu',
  host: 'localhost',
  database: 'orders_assigner',
  password: 'xuxu',
  port: 5432,
});


module.exports = pool;

