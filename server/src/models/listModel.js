const { model, Schema } = require('mongoose');

const listSchema = Schema({
  name: String,
  ingredients: [
    {
      name: String,
      aisle: String,
      recipe: String,
      image: String,
      isActive: { type: Boolean, default: true },
      measures: {
        us: { amount: Number, unit: String },
        metric: { amount: Number, unit: String },
      },
    },
  ],
});

module.exports = model('List', listSchema);
