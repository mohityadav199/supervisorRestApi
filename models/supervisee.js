const mongoose = require("mongoose");

const SuperviseeSchema = new mongoose.Schema([
  {
    name: {
      type: String,
      minlength: 3,
      maxlength: 20,
    },
    project: {
      type: String,
      minlength: 3,
      maxlength: 100,
    },
    industry: {
      type: String,
      minlength: 3,
      maxlength: 100,
    },
    id: {
      type: Number,
      unique: true,
      min: 0,
    },
    senioritylevel: {
      type: Number,
      required: true,
      max: 5,
      min: 1
    },
    supervisorid: {
      type: Number,
      unique: true,
    },
  },
]);

module.exports = new mongoose.model("supervisee", SuperviseeSchema);
