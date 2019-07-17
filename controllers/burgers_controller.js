const express = require('express');
const burgers = require('../models/burgers.js');
const router = express.Router();

// router.route('/select', burgers);
// router.route('/insert', burgers);
// router.route('/update', burgers);
router.use('/', burgers);

module.exports = router;

