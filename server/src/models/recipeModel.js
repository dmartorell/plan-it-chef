const { model, Schema } = require('mongoose');

const recipeSchema = Schema({
  title: String,
  sourceUrl: String,
  summary: String,
  ingredients: [
    {
      name: String,
      aisle: String,
      img: String,
      measures: {
        us: { amount: Number, unit: String },
        metric: { amount: Number, unit: String },
      },
    },
  ],
  instructions: String,
  preparationMinutes: Number,
  cookingMinutes: Number,
  servings: Number,
  image: String,
});

module.exports = model('Recipe', recipeSchema);
