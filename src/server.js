const hapi = require('hapi');
const inert = require('inert');
const routes = require('./routes');
const vision = require('vision');
const Handlebars = require('handlebars');
const cookieAuth = require('hapi-auth-cookie');

const server = new hapi.Server();

server.connection({
  port: process.env.PORT || 4000,
});

server.register([inert, vision, cookieAuth], (err) => {
  if (err) throw err;

  server.views({
    engines: { hbs: Handlebars },
    path: './src/views',
  });

  const options = {
    password: 'pwd1',
    cookie: 'cookie-name',
    isSecure: false,
    ttl: 24 * 60 * 60 * 1000,
  };

  server.auth.strategy('base', 'cookie', 'optional', options);

  server.route(routes);
});

module.exports = server;
