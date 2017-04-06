const bcrypt = require('bcrypt');
const dbConnection = require('../database/db_connection.js');

function validate(req, username, password, cb) {
  dbConnection.query(`SELECT * from users WHERE users.username = '${username}';`, (err, res) => {
    if (err) throw err;
    const user = res.rows[0];
    bcrypt.compare(password, user.password, (err, isValid) => {
      if (err) {
        cb(err);
      } else {
        cb(null, isValid, { name: user.username });
      }
    });
  });
}

module.exports = validate;
