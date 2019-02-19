const express = require('express');

const router = express.Router();

var feedbackController = require('../auth/feedbackController');

router.get('/', (req,res)=>{
    feedbackController.getFeedback(req,res);
})

router.post('/', (req,res)=>{
    feedbackController.postFeedback(req,res);
})

module.exports = router;