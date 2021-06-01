/* eslint-disable no-underscore-dangle */
const Recipe = require('../models/recipeModel');

function recipesController() {
  async function getAll(req, res) {
    try {
      const recipes = await Recipe.find({});
      return res.json({
        recipes,
      });
    } catch (error) {
      return res.status(404);
    }
  }

  async function deleteById(req, res) {
    try {
      await Recipe.findByIdAndDelete(req.params.recipeId);
      res.status(200);
      res.json(req.params.recipeId);
    } catch (error) {
      res.status(404);
      res.send(error.message);
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

  async function getById(req, res) {
    const { recipeId } = req.params;
    try {
      const user = await Recipe.findById(recipeId);
      return res.json({
        user,
      });
    } catch (error) {
      return res.status(404);
    }
  }
  return {
    getAll,
    deleteById,
    createOne,
    getById,
  };
}
module.exports = recipesController;