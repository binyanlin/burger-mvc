const express = require('express');
const router = express.Router();

const controller = require('../controllers/burgers_controller.js')

// router.route('/select', controller);
// router.route('/insert', controller);
// router.route('/update', controller);

router.use('/', controller);
module.exports = router;