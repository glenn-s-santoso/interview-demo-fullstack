// Simple in-memory rate limiter for login endpoint
// In production: use redis-based limiter (e.g. rate-limiter-flexible)
const attempts = new Map();
const WINDOW_MS = 15 * 60 * 1000; // 15 min
const MAX_ATTEMPTS = 5;

module.exports = (req, res, next) => {
  const key = req.ip;
  const now = Date.now();
  const entry = attempts.get(key) || { count: 0, start: now };

  if (now - entry.start > WINDOW_MS) {
    attempts.set(key, { count: 1, start: now });
    return next();
  }
  if (entry.count >= MAX_ATTEMPTS) {
    return res.status(429).json({ error: 'Too many login attempts. Try again later.' });
  }
  entry.count++;
  attempts.set(key, entry);
  next();
};
