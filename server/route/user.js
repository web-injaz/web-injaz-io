const router = require('express').Router();
const registerValidation = require('../validation/register');
const loginValidation = require('../validation/login');
const User = require('../models/user');
const jwt = require('jsonwebtoken');
const passport = require('passport');
const bcrypt = require('bcryptjs');

// @route   /user/register
// @desc    Register a user
// @access  Public
router.post('/register', (req, res) => {    
    const { errors, isValid } = registerValidation(req.body);

    if(!isValid) return res.status(401).json(errors);

    // Check if user exist
    User.findOne({ email: req.body.email })
    .then(user => {
        if(user) return res.status(401).json({email: 'Email already exist'});

        // Hash the password
        const salt = bcrypt.genSaltSync(10);
        req.body.password = bcrypt.hashSync(req.body.password, salt);

        // Add user
        const newUserObg = {
            email: req.body.email,
            password: req.body.password
        };
        const newUser = new User(newUserObg);

        newUser.save().then(user => res.json(user)).catch(err => res.json(err));
    })
    .catch(err => res.json(err));
});

// @route   /user/login
// @desc    Login user
// @access  Public
router.post('/login', (req, res) => {
    const { errors, isValid } = loginValidation(req.body);

    if(!isValid) return res.status(401).json(errors);

    User.findOne({ email: req.body.email })
    .then(user => {
        // Check User
        if(!user) return res.status(404).json({email: 'Incorrect email or password'});

        // Check password
        const result = bcrypt.compareSync(req.body.password, user.password);
        if(!result) return res.status(401).json({password: 'Incorrect password'});

        // Sign a token
        const token = jwt.sign({ id: user.id, email: user.email, role: user.role}, require('../lib/config').secret, { expiresIn: 36000});
        res.json({token: "Bearer " + token});
    });
});

router.get('/current', passport.authenticate('jwt', { session: false }), (req, res) => {
    res.json(req.user);
});

module.exports = router;