const bcrypt = require('bcrypt');

bcrypt.hash(process.argv[2], 10, (err, hash) => {
  if (err) throw err;
  console.log(hash);
});
