const { model, Schema } = require('mongoose');

const listSchema = Schema({
  name: { type: String, default: Date.now },
  ingredients: [
    {
      name: String,
      aisle: String,
      recipeId: String,
      img: String,
      isActive: { type: Boolean, default: true },
      measures: {
        us: { amount: Number, unit: String },
        metric: { amount: Number, unit: String },
      },
    },
  ],
});

module.exports = model('List', listSchema);
