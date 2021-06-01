const { model, Schema } = require('mongoose');

const userSchema = Schema({
  nameRecipe: String,

});

module.exports = model('Recipe', userSchema);
