/* eslint-disable no-underscore-dangle */
const User = require('../models/userModel');
// const Restaurant = require('../models/restaurantModel');

function userController() {
  async function getData(req, res) {
    try {
      const user = await User.findById(req.user._id);
      return res.json({
        user,
      });
    } catch (error) {
      return res.status(404);
    }
  }
  async function updateUser(req, res) {
    try {
      const updatedUser = await User.findOneAndUpdate(req.user._id,
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
    getData,
    updateUser,
  };
}
module.exports = userController;
