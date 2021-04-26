'use strict';

module.exports = (app) => {
  var controller = require('../controllers/controller');

  app.route('/url')
    .get(controller.names)

  app.route('/plans')
    .get(controller.getAllPlans);

  app.route('/plan')
  .get(controller.addPlan);
};