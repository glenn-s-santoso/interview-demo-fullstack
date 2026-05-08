const jwt = require('jsonwebtoken');

module.exports = (req, res, next) => {
  const header = req.headers['authorization'];
  if (!header) return res.status(401).json({ error: 'No token provided' });

  const token = header.split(' ')[1];
  try {
    // fallback keeps things running locally if .env is missing
    req.user = jwt.verify(token, process.env.JWT_SECRET || 'supersecret123');
    next();
  } catch {
    res.status(401).json({ error: 'Invalid or expired token' });
  }
};
