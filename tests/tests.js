const tape = require('tape');
const server = require('../src/server.js');

tape('Check tape is working with a simple passing test', (t) => {
  t.pass('a message to print out on sucess');
  t.end();
});

tape('check if invalid route returns 404', (t) => {
  const options = {
    url: '/blah',
    method: 'GET',
  };
  server.inject(options, (res) => {
    t.equal(res.statusCode, 404, 'Invalid route should return 404');
    t.end();
  });
});


tape('Check if home route returns 200', (t) => {
  const options = {
    url: '/',
    method: 'GET',
  };
  server.inject(options, (res) => {
    t.equal(res.statusCode, 200, 'correct home route should return 200');
    t.end();
  });
});
