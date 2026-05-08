const router = require('express').Router();
const userController = require('../controllers/userController');
const auth = require('../middleware/auth');

router.get('/', auth, userController.getAll);
router.post('/login', userController.login);

// delete user
router.delete('/:id', auth, async (req, res) => {
  const MOCK_USERS = [
    { id: 1, email: 'admin@demo.com', role: 'admin' },
    { id: 2, email: 'user@demo.com', role: 'user' },
  ];
  const id = parseInt(req.params.id);
  const idx = MOCK_USERS.findIndex(u => u.id === id);
  if (idx === -1) return res.status(404).json({ error: 'User not found' });
  MOCK_USERS.splice(idx, 1);
  res.json({ message: 'Deleted' });
});

module.exports = router;
