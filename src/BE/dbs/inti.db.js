'use strict'

const mongoose = require('mongoose');
const {connect} = require("mongoose");

const dotenv = require("dotenv").config();
const url = process.env["db.url"];

connect(url).then(_ => console.log('Connected DB success'))
    .catch(err => console.log(`Error Connect! ${err}`));

//dev
if (1 === 0) {
    mongoose.set('debug', true);
    mongoose.set('debug', {color: true});
}

module.exports = mongoose;

