const addPost = require('./addPost.js');
const loginFunc = require('./login.js');


const home = {
  method: 'GET',
  path: '/',
  handler: (req, reply) => {
    const fakeData = [{
      title: 'Post1',
      body: '1-Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magnam magni maxime dicta ullam aut, sunt.',
      username: 'antonio',
    },
    {
      title: 'Post2',
      body: '2-Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magnam magni maxime dicta ullam aut, sunt.',
      username: 'martha',
    },
    ];
    reply.view('index', {
      credentials: req.auth.credentials,
      posts: fakeData,
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
