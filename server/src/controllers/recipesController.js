/* eslint-disable no-underscore-dangle */
const Recipe = require('../models/recipeModel');

function recipesController() {
  async function getAll(req, res) {
    try {
      const user = await Recipe.find({});
      return res.json({
        user,
      });
    } catch (error) {
      return res.status(404);
    }
  }
  async function updateById(req, res) {
    const { recipeId } = req.params;
    try {
      const updatedRecipe = await Recipe.findByIdAndUpdate(recipeId,
        { ...req.body },
        { new: true });
      return res.json({
        updatedRecipe,
      });
    } catch (error) {
      return res.status(404);
    }
  }

  async function createOne(req, res) {
    const newFavoriteRecipe = new Recipe(req.body);
    try {
      await newFavoriteRecipe.save();
      res.status(200);
      res.json(newFavoriteRecipe);
    } catch (error) {
      res.status(404);
      res.send(error);
    }
  }
  return {
    getAll,
    updateById,
    createOne,
  };
}
module.exports = recipesController;
