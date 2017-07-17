var mongoose = require('mongoose');

var schema = new mongoose.Schema({
  name: {type: String, unique: true},
  email: 'string',
  temppassword: 'string',
  password: 'string'
});

module.exports = mongoose.model('User', schema);
