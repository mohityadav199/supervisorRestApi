const mongoose = require("mongoose");
const yup = require("yup");

//supervisor Schema
const SupervisorSchema = new mongoose.Schema({
  supervizer: {
    type: String,
    required: true,
    minlength: 3,
    maxlength: 20,
  },
  project: {
    type: String,
    required: true,
    minlength: 3,
    maxlength: 100,
  },
  industry: {
    type: String,
    required: true,
    minlength: 3,
    maxlength: 100,
  },
  supervizee: {
    type: Number,
    require: true,
    min: 0,
    max: 100,
  },
  supervizerid: {
    type: Number,
    require: true,
  },
});

const validateSupervisor = (supervisor) => {
  const schema = yup.object().shape({
    supervizer: yup.string().required().min(3).max(20),
  });
  return schema
    .validate(supervisor)
    .then((supervisor) => supervisor)
    .catch((error) =>{
        return{
            message:error.message
        }
    });
};

exports.Supervisor = new mongoose.model("supervisor", SupervisorSchema);
exports.validateSupervisor = validateSupervisor;
