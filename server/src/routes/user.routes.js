const { Router } = require('express');
const usersController = require('../controllers/usersController')();

function usersRouter() {
  const routes = Router();
  routes
    .route('/')
    .get(usersController.getAll);
  // .post(usersController.addOne);
  routes
    .route('/:userId')
    .get(usersController.getById)
    .put(usersController.updateById);
  // .delete(usersController.deleteById);
  return routes;
}
// router.get(
//   '/',
//   (req, res) => {
//     res.json({
//       message: 'You made it to the protected route',
//       user: req.user,
//       token: req.query.secret_token,
//     });
//   },
// );
// router.get(
//   '/favorites',
//   (req, res) => {
//     res.json({
//       message: 'You made it to the protected route',
//       user: req.user,
//       token: req.query.secret_token,
//     });
//   },
// );
module.exports = usersRouter();
