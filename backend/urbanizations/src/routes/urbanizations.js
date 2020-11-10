const router = require('express').Router();
const controller = require('../controllers/urbanizations');

router.route('/').get((req, res)=>{
    controller.all(req, res);
});

router.route('/add').post((req, res)=>{
    controller.add(req, res);
});


module.exports = router;