const express = require('express');
const controller = require('../controllers/controller');
const auth = require('../middlewares/authentication');
var router = express.Router();

router.post('/signup', controller.createUser);
router.post('/signin', controller.verifyUser);
router.post('/updateuser', auth.requireAuthentication, controller.updateUser);
router.post('/getAll', controller.getAll);

module.exports = router;