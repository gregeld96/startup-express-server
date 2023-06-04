const route = require('express').Router();
const  WeddingController = require('../../modules/wedding/controllers');

route.get('/', WeddingController.getAll);
route.post('/', WeddingController.create);

module.exports = route;