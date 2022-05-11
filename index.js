const express = require("express");
const mongoose = require("mongoose");
const cors= require('cors');
const app = express();

require("dotenv").config();
const supervisorRoute = require("./routes/supervisors");
const PORT = process.env.PORT || 4000;
//cors
app.use(cors());
//middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
//routes
app.use("/api/supervisors", supervisorRoute);

//connect to mongodb atlas
mongoose
  .connect(process.env.MONGO_URL, { useNewUrlParser: true })
  .then(() => {
    console.log("connected to mongodbatlas");
  })
  .catch((error) => console.log("some error occur", error));
app.listen(PORT, () => {
  console.log("Server Started at PORT ", PORT);
});
