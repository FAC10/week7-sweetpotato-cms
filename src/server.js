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

  const options = {
    password: '12345678901234567890123456789012345678901234567890123456789012345678901234567890',
    cookie: 'logged-in',
    isSecure: false,
    ttl: 24 * 60 * 60 * 1000,
  };

  server.auth.strategy('base', 'cookie', 'optional', options);

  server.views({
    engines: { hbs: Handlebars },
    path: './src/views',
  });


  server.route(routes);
});

module.exports = server;
