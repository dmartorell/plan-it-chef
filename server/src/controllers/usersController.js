const User = require('../models/userModel');

function userController() {
  async function getUserById(req, res) {
    const { userId } = req.params;
    try {
      const user = await User.findById(userId).populate('recipes');
      return res.json(
        user,
      );
    } catch (error) {
      return res.status(404);
    }
  }
  async function updateUser(req, res) {
    const { userId } = req.params;
    try {
      const updatedUser = await User.findByIdAndUpdate(userId,
        { ...req.body },
        { new: true });
      return res.json({
        updatedUser,
      });
    } catch (error) {
      return res.status(404);
    }
  }
  return {
    getUserById,
    updateUser,
  };
}
module.exports = userController;
