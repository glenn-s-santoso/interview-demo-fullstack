const userService = require('../services/userService');

exports.getAll = async (req, res) => {
  try {
    const users = await userService.getAll();
    res.json({ data: users });
  } catch (err) {
    console.error('[userController.getAll]', err);
    res.status(500).json({ error: 'Internal server error' });
  }
};

exports.login = async (req, res) => {
  try {
    const { email, password } = req.body;

    // Input validation
    if (!email || typeof email !== 'string')
      return res.status(400).json({ error: 'Valid email is required' });
    if (!password || typeof password !== 'string')
      return res.status(400).json({ error: 'Password is required' });

    const token = await userService.login(email.trim().toLowerCase(), password);
    if (!token)
      return res.status(401).json({ error: 'Invalid credentials' });

    res.json({ token });
  } catch (err) {
    // Fixed: was previously leaking err.message (stack trace) to client
    console.error('[userController.login]', err);
    res.status(500).json({ error: 'Internal server error' });
  }
};
