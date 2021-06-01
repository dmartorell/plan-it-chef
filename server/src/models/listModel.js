const { model, Schema } = require('mongoose');

const userSchema = Schema({
  nameList: String,

});

module.exports = model('List', userSchema);
