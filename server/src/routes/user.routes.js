const { Router } = require('express');
const usersController = require('../controllers/usersController')();

function usersRouter() {
  const routes = Router();
  routes
    .route('/')
    .get(usersController.getAll);
  routes
    .route('/:userId')
    .get(usersController.getById)
    .put(usersController.updateById);
  // .delete(usersController.deleteById);
  return routes;
}

module.exports = usersRouter();
