const express = require('express');

const router = express.Router();

var interviewerController = require('../auth/interviewerController');

router.get('/', (req,res)=>{
    interviewerController.getInterviewer(req,res);
})

router.post('/', (req,res)=>{
    interviewerController.postInterviewer(req,res);
})

module.exports = router;