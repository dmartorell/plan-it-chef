/* eslint-disable no-underscore-dangle */
const List = require('../models/listModel');

function listsController() {
  async function getAll(req, res) {
    try {
      const lists = await List.find({});
      return res.json({
        lists,
      });
    } catch (error) {
      return res.status(404);
    }
  }

  async function updateById(req, res) {
    try {
      const updatedList = await List.findByIdAndUpdate(
        req.params.listId,
        req.body,
        { new: true },
      );
      res.json(updatedList);
    } catch (error) {
      res.status(404);
      res.send(error.message);
    }
  }

  async function deleteById(req, res) {
    try {
      await List.findByIdAndDelete(req.params.listId);
      res.status(200);
      res.json(req.params.listId);
    } catch (error) {
      res.status(404);
      res.send(error.message);
    }
  }

  async function createOne(req, res) {
    const newList = new List(req.body);
    try {
      await newList.save();
      res.status(200);
      res.json(newList);
    } catch (error) {
      res.status(404);
      res.send(error);
    }
  }
  return {
    getAll,
    deleteById,
    createOne,
    updateById,
  };
}
module.exports = listsController;
