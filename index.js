const express = require('express');
const app = express();
const connectDB = require("./dbConnect.js");
const dotenv = require('dotenv');

const listingsRouter = require("./routes/listingRoute.js");
const PORT = process.env.PORT || 6031;


dotenv.config();
connectDB();

app.use(express.json())


app.get("/", (req, res) => {
  res.send("hello");
});


app.use("/listings", listingsRouter);

app.listen(PORT, () => {
  console.log("server is listening at port http://localhost:6031");
});