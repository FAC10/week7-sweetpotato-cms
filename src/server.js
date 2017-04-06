const hapi = require('hapi');
const inert = require('inert');
const routes = require('./routes');
const vision = require('vision');
const Handlebars = require('handlebars');
const hapiAuth = require('hapi-auth-basic');
const validate = require('../pseudocode.js');


const server = new hapi.Server();

server.connection({
  port: process.env.PORT || 4000,
});

server.register([inert, vision, hapiAuth], (err) => {
  if (err) throw err;

  server.auth.strategy('simple', 'basic', { validateFunc: validate });

  server.views({
    engines: { hbs: Handlebars },
    path: './src/views',
  });

  server.route(routes);
});

module.exports = server;
