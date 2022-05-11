const express = require("express");
const mongoose = require("mongoose");
const app = express();
require('dotenv').config();
const PORT = process.env.PORT || 3000;
//connect to mongodb atlas
mongoose.connect(process.env.MONGO_URL,
{useNewUrlParser:true})
.then(()=>{
    console.log("connected to mongodbatlas")
})
.catch(error=>console.log("some error occur",error))
app.listen(PORT, () => {
  console.log("Server Started at PORT ", PORT);
});
