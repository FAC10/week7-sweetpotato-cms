const bcrypt = require('bcrypt');
const dbConnection = require('../database/db_connection.js');

module.exports = (req, reply) => {
  const username = req.payload.username;
  const password = req.payload.password;

  dbConnection.query(`SELECT exists(SELECT users.username FROM users WHERE users.username = '${username}') FROM users`, (err, res) => {
    if (res.rows[0].exists) {
      dbConnection.query(`SELECT * from users WHERE users.username = '${username}';`, (err, res) => {
        if (err) throw err;
        const user = res.rows[0];
        bcrypt.compare(password, user.password, (err, isValid) => {
          if (err) throw err;
          if (isValid) {
            req.cookieAuth.set({ username });
            reply.redirect('/create-post');
          } else {
            reply.view('failed-login');
          }
        });
      });
    } else {
      reply.view('failed-login');
    }
  });
};
