const { json } = require('body-parser');
var mongoose = require('mongoose');

mongoose.connect("mongodb://localhost:27017/HMS", { useNewUrlParser: true});

module.exports.USERS_DB = require('./MODELS/USERS_DB');
module.exports.SINGLEROOM = require('./MODELS/SINGLEROOM');
module.exports.DOUBLEROOM = require('./MODELS/DOUBLEROOM');
module.exports.TWINROOM = require('./MODELS/TWINROOM');
module.exports.KINGROOM = require('./MODELS/KINGROOM');
module.exports.COUNTER = require('./MODELS/COUNTER');
module.exports.BOOKING = require('./MODELS/BOOKING');
