var express = require('express');
var router = express.Router();
var events  = require('./../controllers/event.controller');


router.post('/', events.create);
router.get('/', events.findAll);


module.exports = router;

