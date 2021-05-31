const User = require('../models/usersModel');

function usersController() {
  async function getAll(req, res) {
    const users = await User.find();
    res.json(users);
  }

  async function createOne(req, res) {
    const newUser = new User(req.body);
    try {
      await newUser.save();
      res.json(newUser);
    } catch (error) {
      res.status(404);
      res.send(error.message);
    }
  }

  async function deleteById(req, res) {
    try {
      await User.findByIdAndDelete(req.params.userId);
      res.status(200);
      res.json(req.params.userId);
    } catch (error) {
      res.status(404);
      res.send(error.message);
    }
  }

  return {
    getAll,
    createOne,
    deleteById,
  };
}

module.exports = usersController;
