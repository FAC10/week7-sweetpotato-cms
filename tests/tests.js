const test = require('tape');

test('Check tape is working with a simple passing test', (t) => {
  t.pass('a message to print out on sucess');
  t.end();
});
