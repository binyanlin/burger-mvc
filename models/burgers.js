const orm = require('../config/orm.js');
const express = require('express');
const router = express.Router();

router.route('/select').get(orm.selectAll);
router.route('/insert').get(orm.insertOne);
router.route('/update').get(orm.updateOne);
router.route('/').get(orm.home);

module.exports = router;