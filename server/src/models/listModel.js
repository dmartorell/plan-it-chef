const { model, Schema } = require('mongoose');

const listSchema = Schema({
  name: String,
  ingredients: [
    {
      name: String,
      aisle: String,
      recipe: { type: Schema.Types.ObjectId, ref: 'Recipe' },
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
