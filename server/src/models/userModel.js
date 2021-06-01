const { model, Schema } = require('mongoose');

const userSchema = Schema({
  email: String,
  password: String,
  recipes: [{ type: Schema.Types.ObjectId, ref: 'Recipe' }],
  lists: [{ type: Schema.Types.ObjectId, ref: 'List' }],

});

userSchema.methods.verifyPassword = function verifyPassword(password) {
  return password === this.password;
};

module.exports = model('User', userSchema);
