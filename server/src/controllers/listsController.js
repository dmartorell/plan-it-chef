/* eslint-disable no-underscore-dangle */
const List = require('../models/listModel')();

function listsController() {
  async function getData(req, res) {
    try {
      const user = await List.findById(req.list._id);
      return res.json({
        user,
      });
    } catch (error) {
      return res.status(404);
    }
  }
  async function updateList(req, res) {
    try {
      const updatedList = await List.findOneAndUpdate(req.list._id,
        { ...req.body },
        { new: true });
      return res.json({
        updatedList,
      });
    } catch (error) {
      return res.status(404);
    }
  }
  return {
    getData,
    updateList,
  };
}
module.exports = listsController;
