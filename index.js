const express = require('express');
const app = express();
const connectDB = require("./dbConnect.js");
const dotenv = require('dotenv');

const PORT = process.env.PORT || 6031;

//Load Config
dotenv.config();
connectDB();

app.use(express.json())


//app.get("/", (req, res) => {
//  res.send("hello");
//});


app.use("/abc", require('./routes/listingRoute'));

app.listen(PORT, () => {
  console.log("server is listening at port http://localhost:6031");
});