const express = require('express');
const listingsRouter = express.Router();
const searchListings = require("../controllers/searchListings");


listingsRouter.route("/search").get(searchListings);


module.exports = listingsRouter;