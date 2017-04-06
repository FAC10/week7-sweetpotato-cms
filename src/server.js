const hapi = require('hapi');
const inert = require('inert');
const routes = require('./routes');
const vision = require('vision');
const cookieAuth = require('hapi-auth-cookie');
const configureHandlebars = require('./configure-handlebars');

const server = new hapi.Server();

server.connection({
  port: process.env.PORT || 4000,
});

server.register([inert, vision, cookieAuth], (err) => {
  if (err) throw err;

  const options = {
    password: 'pwd1',
    cookie: 'cookie-name',
    isSecure: false,
    ttl: 24 * 60 * 60 * 1000,
  };

  server.auth.strategy('base', 'cookie', 'optional', options);

  server.views(configureHandlebars);
  server.route(routes);
});

module.exports = server;
