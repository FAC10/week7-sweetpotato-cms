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
  config: {
    auth: 'simple',
    handler: (req, reply) => {
      reply.view('login-page');
    },
  },
};

module.exports = [
  home,
  loginPage,
];
