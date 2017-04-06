const dbConnection = require('../database/db_connection.js');
const bcrypt = require('bcrypt');

const home = {
  method: 'GET',
  path: '/',
  handler: (req, reply) => {
    reply.view('index');
  },
};

const loginPage = {
  method: 'GET',
  path: '/login-page',
  handler: (req, reply) => {
    reply.view('login-page');
  },
};

const login = {
  method: 'POST',
  path: '/login',
  handler: (req, reply) => {
    const username = req.payload.username;
    const password = req.payload.password;

    dbConnection.query(`SELECT * from users WHERE users.username = '${username}';`, (err, res) => {
      if (err) throw err;
      const user = res.rows[0];
      bcrypt.compare(password, user.password, (err, isValid) => {
        if (err) throw err;
        if (isValid) {
          reply.view('create-post', {
            credentials: { name: username },
          });
        } else {
          reply.view('failed-login');
        }
      });
    });
  },
};

// const createPost = {
//   method: 'GET',
//   path: '/create-post',
//   handler: (req, reply) => {
//     reply.view('create-post', {
//       credentials: req.auth.credentials,
//     });
//   },
// };
  // handler: (req, reply) => {
  //   const username = req.payload.username;
  //   const password = req.payload.password;
  //   req.cookieAuth.set({ username });
  //
  //   reply.view('create-post', {
  //     credentials: req.auth.credentials,
  //   });
  // },

const authRoute = {
  method: 'GET',
  path: '/auth-only',
  handler: (req, reply) => {
    reply('You\'re not authenticated :(');
  },
};

module.exports = [
  home,
  loginPage,
  login,
  authRoute,
];
