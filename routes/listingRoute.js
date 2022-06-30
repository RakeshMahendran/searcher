const express = require('express');
const router = express.Router();

const PropListings = require("../models/listingModel")
const searchListings = require("../controllers/searchListings");


router.get("/api/search", (req,res) => {
    PropListings.find({}, (err, data) => {
        if(!err)  {
            res.send(data);
        } else{
            console.log(err);
        }  
      });
});

//searchListingsById

//router.get('/api/search/:id', (req,res) => {
  //  PropListings.findById(req.params.id, (err, data) => {
  //      if(!err) {
         //   res.send(data);
       // } else {
          //  console.log(err);
     //   }
   // });
//} );

router.get('/api/search/:name', (searchListings))




module.exports = router;
