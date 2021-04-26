'use strict';

module.exports = (app) => {
  var controller = require('../controllers/controller');

  app.route('/url')
    .get(controller.names)
};