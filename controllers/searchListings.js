const express = require('express');
const PropListings = require("../models/listingModel")

const searchListings = async (req, res) => {
  try {
    console.log(req.params.PropListings);
    // const result = await PropListings.find({ Property_Name: { $regex: "/^" + req.param.name + "/" } });
    const result = await PropListings.find({ Countryname: new RegExp(req.params.PropListings)});
   
    res.json(result);
  } catch (err) {
    console.log(`Error while filtering the listings ${err} `);
  }
};

module.exports = searchListings;
