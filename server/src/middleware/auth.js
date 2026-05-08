const jwt = require('jsonwebtoken');

module.exports = (req, res, next) => {
  const header = req.headers['authorization'];
  if (!header || !header.startsWith('Bearer '))
    return res.status(401).json({ error: 'No token provided' });

  const token = header.split(' ')[1];
  if (!token)
    return res.status(401).json({ error: 'Malformed authorization header' });

  try {
    req.user = jwt.verify(token, process.env.JWT_SECRET || 'dev-secret');
    next();
  } catch (err) {
    const message = err.name === 'TokenExpiredError'
      ? 'Token has expired'
      : 'Invalid token';
    res.status(401).json({ error: message });
  }
};
