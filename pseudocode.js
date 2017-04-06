/*
user goes to home page
->
user clicks 'add post' button
->
authentication happens
  What happens here?
  basic auth?
->
(if auth = true) -> route to form page
(if auth = false) -> route to 'sorry' page
ALSO (when auth = true) -> create session cookie
ON (logout) -> clear cookie
*/

const bcrypt = require('bcrypt');

const user = {
  username: 'hello',
  password: 'world',
};

bcrypt.hash(user.password, 10, (err, hash) => {
  console.log(hash);
});

function basicVal(req, username, password, cb) {
  bcrypt.compare(password, user.password, (err, isValid) => {
    if (err) {
      cb(err);
    } else {
      cb(null, isValid, { name: user.name });
    }
  });
}

module.exports = basicVal;
