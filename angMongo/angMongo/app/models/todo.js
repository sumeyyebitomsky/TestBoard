﻿
var mongoose = require('mongoose');


module.exports = mongoose.model('Todo', {
    text: String,
    detail: String,
    done: Boolean
});