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

module.exports = [
  home,
  loginPage,
];
