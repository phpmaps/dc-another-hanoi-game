const express = require('express');
const router = express.Router();
const rateLimit = require('express-rate-limit');
const slowDown = require('express-slow-down'); 
const axios = require('axios'); 

const limiter = rateLimit({
	windowMs: 30 * 1000, // Time frame (30 seconds * 1000ms)
	max: 10, // Max amount of requests
});

const speedLimiter = slowDown({
	windowMs: 30 * 1000, // Time frame (30 seconds * 1000ms)
	delayAfter: 3, // Start delaying after 3 requests within the time frame
	delayMs: 500 // Make each requests 500ms slower
});

router.get('/', limiter, speedLimiter, (req, res) => {
	res.json({
		message: 'API - 👋🌎🌍🌏'
	});
});


module.exports = router;