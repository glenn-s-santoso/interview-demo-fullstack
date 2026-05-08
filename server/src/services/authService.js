// WIP: password hashing — DO NOT MERGE YET
const bcrypt = require('bcrypt');
exports.hashPassword = (pw) => bcrypt.hash(pw, 10);
exports.comparePassword = (pw, hash) => bcrypt.compare(pw, hash);
