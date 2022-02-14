const express = require('express');
const User = require('../models/User.model');
const router = express.Router();
const saltRound = 10;
const bcrypt = require('bcrypt');

router.route('signup')
	.get((req, res)=>{
		res.render('signup');
	})
	.post((req, res)=>{})

router.get('/login', (req, res) => {
	res.render('login');
});

router.get('/profile', (req, res) => {
	res.render('profile');
});

module.exports = router;
