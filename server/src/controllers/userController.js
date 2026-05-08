const userService = require('../services/userService');

exports.getAll = async (req, res) => {
  try {
    const users = await userService.getAll();
    res.json({ data: users });
  } catch (err) {
    res.status(500).json({ error: 'Internal server error' });
  }
};

exports.login = async (req, res) => {
  try {
    const { email, password } = req.body;
    if (!email || !password)
      return res.status(400).json({ error: 'email and password are required' });

    const token = await userService.login(email, password);
    if (!token)
      return res.status(401).json({ error: 'Invalid credentials' });

    res.json({ token });
  } catch (err) {
    res.status(500).json({ error: 'Internal server error' });
  }
};
