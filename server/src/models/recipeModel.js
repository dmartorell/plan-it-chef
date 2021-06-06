/* eslint-disable no-dupe-keys */
const { model, Schema } = require('mongoose');

const recipeSchema = Schema({
  title: String,
  sourceUrl: String,
  instructions: String,
  preparationMinutes: Number,
  cookingMinutes: Number,
  servings: Number,
  image: String,
  analyzedInstructions: [
    {
      name: String,
      steps: [
        {
          number: Number,
          step: String,
        },
      ],
    },
  ],
  extendedIngredients: [
    {
      name: String,
      aisle: String,
      original: String,
      image: String,
      measures: {
        us: { amount: Number, unitShort: String },
        metric: { amount: Number, unitShort: String },
      },
    },
  ],
});

module.exports = model('Recipe', recipeSchema);
