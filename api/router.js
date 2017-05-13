const myRouter = require('express').Router();
const controller = require('./controller');
const db = require('./schema');

myRouter.route('/endpoint')
  .get((req, res) => {
    controller.someFunction(req, res);
  });

module.exports = myRouter;
