const bcrypt = require('bcrypt');
const SALT_ROUNDS = 10;

/**
 * Hash a plain-text password.
 * @param {string} password
 * @returns {Promise<string>} bcrypt hash
 */
exports.hashPassword = (password) => bcrypt.hash(password, SALT_ROUNDS);

/**
 * Compare a plain-text password against a stored hash.
 * @param {string} password
 * @param {string} hash
 * @returns {Promise<boolean>}
 */
exports.comparePassword = (password, hash) => bcrypt.compare(password, hash);
