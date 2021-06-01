/* eslint-disable no-underscore-dangle */
const List = require('../models/listModel');

function listsController() {
  async function getAll(req, res) {
    try {
      const lists = await List.find({});
      return res.json(
        lists,
      );
    } catch (error) {
      return res.status(404);
    }
  }

  async function updateById(req, res) {
    const { listId } = req.params;
    try {
      const updatedList = await List.findByIdAndUpdate(
        listId,
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
    const { listId } = req.params;
    try {
      await List.findByIdAndDelete(listId);
      res.status(200);
      res.json(listId);
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

  async function getById(req, res) {
    const { listId } = req.params;
    try {
      const list = await List.findById(listId).populate('ingredients.recipe');
      return res.json(
        list,
      );
    } catch (error) {
      return res.status(404);
    }
  }
  return {
    getAll,
    deleteById,
    createOne,
    updateById,
    getById,
  };
}
module.exports = listsController;
