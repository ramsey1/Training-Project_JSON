const express = require('express');

const router = express.Router();

var candidate = require('./api/candidate');

var interviewer = require('./api/interviewer');

var schedule = require('./api/schedule');

var feedback = require('./api/feedback');

router.use('/candidate', candidate);

router.use('/interviewer', interviewer);

router.use('/schedule', schedule);

router.use('/feedback', feedback);

module.exports = router;