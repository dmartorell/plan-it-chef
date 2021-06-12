const User = require('../models/userModel');

function userController() {
  async function getById(req, res) {
    const { userId } = req.params;
    try {
      const user = await User.findById(userId).populate('recipes').populate('lists');
      return res.json(
        user,
      );
    } catch (error) {
      return res.status(404);
    }
  }
  async function updateById(req, res) {
    const { userId } = req.params;
    try {
      const updatedUser = await User.findByIdAndUpdate(userId,
        { ...req.body },
        { new: true });
      return res.json(
        updatedUser,
      );
    } catch (error) {
      return res.status(404);
    }
  }
  async function getAll(req, res) {
    try {
      const users = await User.find({}).populate('recipes').populate('lists');
      return res.json(
        users,
      );
    } catch (error) {
      return res.status(404);
    }
  }
  return {
    getById,
    updateById,
    getAll,
  };
}
module.exports = userController;
