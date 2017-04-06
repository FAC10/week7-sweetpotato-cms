const hapi = require('hapi');
const inert = require('inert');
const routes = require('./routes');
const vision = require('vision');
const Handlebars = require('handlebars');
const cookieAuth = require('hapi-auth-cookie');
const hapiAuth = require('hapi-auth-basic');
const validate = require('./validate');

const server = new hapi.Server();

server.connection({
  port: process.env.PORT || 4000,
});

server.register([inert, vision, hapiAuth, cookieAuth], (err) => {
  if (err) throw err;

  // server.auth.strategy('base', 'cookie', 'optional', options);

  server.auth.strategy('simple', 'basic', { validateFunc: validate });

  server.views({
    engines: { hbs: Handlebars },
    path: './src/views',
  });

  // const options = {
  //   password: 'pwd1',
  //   cookie: 'cookie-name',
  //   isSecure: false,
  //   ttl: 24 * 60 * 60 * 1000,
  // };

  server.route(routes);
});

module.exports = server;
