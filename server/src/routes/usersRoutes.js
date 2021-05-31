const { Router } = require('express');

const usersController = require('../controllers/usersController')();

function usersRouter() {
  const routes = Router();

  routes
    .route('/')
    .get(usersController.getAll)
    .post(usersController.createOne);

  routes
    .route('/:userId')
    .delete(usersController.deleteById);

  return routes;
}

module.exports = usersRouter();
