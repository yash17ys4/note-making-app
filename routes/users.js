const express = require('express');
const jsonParser = require('body-parser').json();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const Users = require('../models/Users');

const router = express.Router();

router.post('/signup', (req, res, next) => {
    Users.findOne({
        where : {
            email: req.body.email
        }
    })
    .then(user => {
        if(user) {
            return res.status(422).json({ // 422 means request can be processed but conflict has occured
                message: "Mail exists"
            })
        } else {
            bcrypt.hash(req.body.password, 10, (err, hash) => {
                if(err) {
                    // console.log('here');
                    return res.status(500).json({
                        error: err
                    });
                } else {
                    Users.create({
                        email: req.body.email,
                        password: hash
                    })
                    .then((result) => {
                        console.log(result);
                        res.status(201).json({
                            message: "user created"
                        });
                    })
                    .catch(err => res.status(500).json({
                        error: err
                    }));
                }
            });
        }
    })
    .catch(err => {
        // console.log('error ftom here');
        console.log(err);
    })});

router.post('/login', (req, res) => {
    Users.findOne({
        where : {
            email: req.body.email
        }
    })
    .then(user => {
        if(user.length < 1) {
            return res.send(404).json({
                message: "Error occured"
            })
        } else {
            bcrypt.compare(req.body.password, user.password, (err, result) => {
                if(err) {
                    return res.send(404).json({
                        message: "Error occured"
                    });
                }
                // else {
                if(result) {
                    const token = jwt.sign({
                        email: user.email,
                        userId: user.id
                    },
                    "secret",
                    {
                        expiresIn: "1h"
                    }); //use env here
                    return res.status(200).json({
                        message: "Auth successful",
                        token: token
                    })
                }
            })
        }
    })
});

module.exports = router;