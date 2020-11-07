const router = require('express').Router();

const welcome = require('./welcome');

router.use('/', welcome);

module.exports = router;