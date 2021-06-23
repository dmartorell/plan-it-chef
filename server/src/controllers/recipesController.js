const Recipe = require('../models/recipeModel');

function recipesController() {
  async function getAll(req, res) {
    try {
      let recipes = null;
      if (req.query.title) {
        recipes = { title: { $regex: req.query.title, $options: 'i' } };
      }
      return res.json(await Recipe.find(recipes).sort({ _id: -1 }));
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
      const recipe = await Recipe.findById(recipeId);
      return res.json(
        recipe,
      );
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
