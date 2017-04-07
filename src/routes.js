const addPost = require('./addPost.js');
const loginFunc = require('./login.js');
const dbConnection = require('../database/db_connection.js');


const home = {
  method: 'GET',
  path: '/',
  handler: (req, reply) => {
    dbConnection.query('SELECT posts.title AS title, posts.body AS body, users.username AS username FROM posts INNER JOIN users ON posts.user_id = users.user_id', (err, res) => {
      if (err) return err;
      reply.view('index', {
        credentials: req.auth.credentials,
        posts: res.rows,
      });
    });
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
  handler: loginFunc,
};

const createPost = {
  method: 'GET',
  path: '/create-post',
  handler: (req, reply) => {
    if (req.auth.isAuthenticated) {
      reply.view('create-post', {
        credentials: req.auth.credentials,
      });
    } else {
      reply.redirect('/login-page');
    }
  },
};

const postBlog = {
  method: 'POST',
  path: '/post-blog',
  handler: addPost,
};

const logout = {
  method: 'GET',
  path: '/logout',
  handler: (req, reply) => {
    req.cookieAuth.clear();
    reply.redirect('/');
  },
};


module.exports = [
  home,
  loginPage,
  login,
  createPost,
  logout,
  postBlog,
];
