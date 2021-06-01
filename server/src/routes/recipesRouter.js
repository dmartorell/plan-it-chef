const { Router } = require('express');

const recipesController = require('../controllers/recipesController')();

function recipesRouter() {
  const routes = Router();

  routes
    .route('/')
    .get(recipesController.getAll)
    .post(recipesController.createOne);

  routes
    .route('/:recipeId')
    .put(recipesController.updateById);
  // .delete(recipesController.deleteById);

  return routes;
}

module.exports = recipesRouter();
