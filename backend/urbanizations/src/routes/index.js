const router = require('express').Router();

const welcome = require('./welcome');
const urbanizations = require('./urbanizations');

router.use('/', urbanizations);

router.use('/welcome', welcome);

module.exports = router;