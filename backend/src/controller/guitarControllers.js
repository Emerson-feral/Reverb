const Guitar = require('../model/guitarModel');

function guitarController() {
  async function getAll(req, res) {
    try {
      const guitar = await Guitar.find();
      res.json(guitar);
      res.status(200);
    } catch (error) {
      res.send(error);
    }
  }

  async function createOne(req, res) {
    try {
      const newGuitar = new Guitar(req.body);
      await newGuitar.save();
      res.json(newGuitar);
    } catch (error) {
      res.send(error);
    }
  }

  async function getById(req, res) {
    try {
      const guitarById = await Guitar.findById(
        req.params.guitarId
      );
      res.json(guitarById);
    } catch (error) {
      res.status(404);
      res.send(error);
    }
  }

  async function updateById(req, res) {
    try {
      const updatedGuitar = await Guitar.findByIdAndUpdate(
        req.params.guitarId,
        req.body,
        { new: true }
      );
      res.json(updatedGuitar);
    } catch (error) {
      res.send(error);
    }
  }

  async function deleteById(req, res) {
    try {
      await Guitar.findByIdAndDelete(req.params.guitarId);
      res.status(204);
      res.json();
    } catch (error) {
      res.send(error);
    }
  }

  return {
    getAll,
    createOne,
    getById,
    updateById,
    deleteById
  };
}

module.exports = guitarController;
