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
    .delete(recipesController.deleteById)
    .get(recipesController.getById);

  return routes;
}

module.exports = recipesRouter();
