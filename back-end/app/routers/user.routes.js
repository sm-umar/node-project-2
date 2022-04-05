const express = require('express');
const controller = require('../controllers/user.controller');
const auth = require('../middlewares/authentication');
var router = express.Router();

router.post('/signup', controller.createUser);
router.post('/signin', controller.verifyUser);
router.get('/getAll', controller.getAll);

module.exports = router;
