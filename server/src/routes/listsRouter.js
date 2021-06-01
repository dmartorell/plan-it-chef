const { Router } = require('express');

const listsController = require('../controllers/listsController')();

function listsRouter() {
  const routes = Router();

  routes
    .route('/')
    .get(listsController.getAll)
    .post(listsController.createOne);

  routes
    .route('/:listId')
    .delete(listsController.deleteById)
    .put(listsController.updateById);

  return routes;
}

module.exports = listsRouter();
