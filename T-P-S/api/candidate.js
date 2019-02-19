const express = require('express');

const router = express.Router();

var candidateController = require('../auth/candidateController');

router.get('/', (req,res)=>{
    candidateController.getCandidate(req,res);
})

router.post('/', (req,res)=>{
    candidateController.postCandidate(req,res);
})

module.exports = router;