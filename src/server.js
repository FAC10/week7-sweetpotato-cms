const hapi = require('hapi');
const inert = require('inert');
const routes = require('./routes');
const vision = require('vision');
const Handlebars = require('handlebars');

const server = new hapi.Server();

server.connection({
  port: process.env.PORT || 4000,
});

server.register([inert, vision], (err) => {
  if (err) throw err;

  server.views({
    engines: { hbs: Handlebars },
    path: './src/views',
    layout: 'index',
  });

  server.route(routes);
});

module.exports = server;
