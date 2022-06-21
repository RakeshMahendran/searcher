const mongoose = require('mongoose');

const listingsSchema = new mongoose.Schema({
    City_Name: {
        type: "string",
    },
    Country_Name: {
        type: "string",
    },
    Country_Code: { 
        type: "string",
    }
})


const PropListings = mongoose.model("Listings", listingsSchema);

module.exports =  PropListings();