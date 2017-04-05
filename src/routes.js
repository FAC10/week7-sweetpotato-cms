const home = {
  method: 'GET',
  path: '/',
  handler: (req, reply) => {
    reply.view('index');
  },
};

module.exports = [
  home,
];
