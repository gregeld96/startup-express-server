const route = require('express').Router();
const WeddingRoutes = require('./wedding');

route.use(`/weddings`, WeddingRoutes);

module.exports = route;