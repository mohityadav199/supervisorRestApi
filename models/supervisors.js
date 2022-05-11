const mongoose = require("mongoose");
const yup = require("yup");
const Supervisee = require("./supervisee");
//supervisor Schema
const SupervisorSchema = new mongoose.Schema({
  supervisor: {
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
  supervisee: [Supervisee.schema],
  senioritylevel: {
    type: Number,
    required: true,
    max: 5,
    min: 1,
  },
  supervisorid: {
    type: Number,
    unique: true,
  },
});

// const validateSupervisor = (supervisor) => {
//   const schema = yup.object().shape({
//     supervizer: yup.string().required().min(3).max(20),
//   });
//   return schema
//     .validate(supervisor)
//     .then((supervisor) => supervisor)
//     .catch((error) =>{
//         return{
//             message:error.message
//         }
//     });
// };

module.exports = new mongoose.model("supervisor", SupervisorSchema);
