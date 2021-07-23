const { Router } = require('express');
const guitarController = require('../controller/guitarControllers')();

function guitarRouter() {
  const routes = Router();

  routes
    .route('/')
    .get(guitarController.getAll)
    .post(guitarController.createOne);

  routes
    .route('/:guitarId')
    .get(guitarController.getById)
    .put(guitarController.updateById)
    .delete(guitarController.deleteById);

  return routes;
}

module.exports = guitarRouter();
