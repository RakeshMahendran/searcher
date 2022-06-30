const mongoose = require('mongoose');

const listingsSchema = new mongoose.Schema({
    Cityname: {
        type: "string",
    },
    Countryname: {
        type: "string",
    },
    WorldAreaCode: { 
        type: "string",
    },

    AirportCode: {
        type: "string",
    },
    AirportName: {
         type: "string",
    },
    CountryAbbrev: {
        type: "object",
    }
})


const PropListings = mongoose.model("Listings", listingsSchema);

module.exports =  PropListings;