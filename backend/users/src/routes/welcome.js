const router = require('express').Router();

router.route('/').get((req, res)=>{
    const info = {
        name:'Urbansys',
        module:'Users',
        version:'0.1'
    }
    res.json(info);
});

module.exports = router;