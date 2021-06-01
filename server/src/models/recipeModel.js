const { model, Schema } = require('mongoose');

const recipeSchema = Schema({
  title: String,
  sourceUrl: String,
  instructions: String,
  preparationMinutes: Number,
  cookingMinutes: Number,
  servings: Number,
  image: String,
  ingredients: [
    {
      name: String,
      aisle: String,
      image: String,
      measures: {
        us: { amount: Number, unitShort: String },
        metric: { amount: Number, unitShort: String },
      },
    },
  ],
});

module.exports = model('Recipe', recipeSchema);
