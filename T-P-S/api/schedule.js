const express = require('express');

const router = express.Router();

var scheduleController = require('../auth/scheduleController');

router.get('/', (req,res)=>{
    scheduleController.getSchedule(req,res);
})

router.post('/', (req,res)=>{
    scheduleController.postSchedule(req,res);
})

module.exports = router;