const express = require('express');
const controller = require('../controllers/album.controller');
const auth = require('../middlewares/authentication');
var router = express.Router();

router.post('/create', auth.requireAuthentication, controller.create);
router.post('/update/:id', auth.requireAuthentication, controller.update);
router.post('/delete', auth.requireAuthentication, controller.delete);
router.get('/getAll', controller.getAll);

module.exports = router;
