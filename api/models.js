const schema = require('./schema');
const mongoose = require('mongoose');

const Business = mongoose.model('Business', schema.businessSchema);

exports.Business = Business;
