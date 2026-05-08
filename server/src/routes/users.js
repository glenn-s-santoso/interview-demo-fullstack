const router = require('express').Router();
const userController = require('../controllers/userController');
const auth = require('../middleware/auth');

router.get('/', auth, userController.getAll);
router.post('/login', userController.login);

module.exports = router;
