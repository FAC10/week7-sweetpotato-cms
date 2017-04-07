const dbConnection = require('../database/db_connection.js');

function postForm(req, reply) {
  const name = req.auth.credentials.username;
  const date = new Date().toISOString().slice(0, 10);
  dbConnection.query(`INSERT INTO posts (title, body, date, user_id) VALUES ('${req.payload.title}', '${req.payload.body}', '${date}', (SELECT user_id FROM users WHERE users.username = '${name}'));`, (err, res) => {
    if (err) {
      return err;
    }
    reply.redirect('/');
  });
}

module.exports = postForm;
