const { model, Schema } = require('mongoose');

const listSchema = Schema({
  name: String,
  date: Date,
  ingredients: [
    {
      name: String,
      aisle: String,
      recipeId: [Number],
      img: String,
      isActive: Boolean,
      measures: {
        us: { amount: Number, unit: String },
        metric: { amount: Number, unit: String },
      },
    },
  ],
});

module.exports = model('List', listSchema);
