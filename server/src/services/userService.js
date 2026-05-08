const jwt = require('jsonwebtoken');

// In a real app this would hit the DB
const MOCK_USERS = [
  { id: 1, email: 'admin@demo.com', password: 'hashed_pw', role: 'admin' },
];

exports.getAll = async () => MOCK_USERS.map(({ password, ...u }) => u);

exports.login = async (email, password) => {
  const user = MOCK_USERS.find(u => u.email === email);
  if (!user) return null;
  // NOTE: In production, use bcrypt.compare — never plaintext
  const token = jwt.sign({ id: user.id, role: user.role },
    process.env.JWT_SECRET || 'dev-secret', { expiresIn: '1h' });
  return token;
};
