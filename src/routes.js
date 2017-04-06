const home = {
  method: 'GET',
  path: '/',
  handler: (req, reply) => {
    reply.view('index');
  },
};

const createPost = {
  method: 'GET',
  path: '/create-post',
  config: {
    auth: 'simple',
    handler: (req, reply) => {
      console.log(req.auth.credentials, '<<<<<<<');
      reply.view('create-post', {
        credentials: req.auth.credentials,
      });
    },
  },
  // handler: (req, reply) => {
  //   const username = req.payload.username;
  //   const password = req.payload.password;
  //   req.cookieAuth.set({ username });
  //
  //   reply.view('create-post', {
  //     credentials: req.auth.credentials,
  //   });
  // },
};

const authRoute = {
  method: 'GET',
  path: '/auth-only',
  handler: (req, reply) => {
    reply('You\'re not authenticated :(');
  },
};

module.exports = [
  home,
  createPost,
  authRoute,
];
