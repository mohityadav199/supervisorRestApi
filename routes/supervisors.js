const express = require("express");
const router = express.Router();
const Supervisor = require("../models/supervisors");
const cors = require("cors");
const app = express();
app.use(cors());
//POST: CREATE A NEW SUPREVISOR
router.post("/", async (req, res) => {
  //  const error = await validateSupervisor(req.body);
  //  if(error.message) res.status(400).send(error.message);
  supervisor = new Supervisor({
    supervisor: req.body.supervisor,
    project: req.body.project,
    industry: req.body.industry,
    supervisee: req.body.supervisee,
    supervisorid: req.body.supervisorid,
    senioritylevel: req.body.senioritylevel,
  });

  supervisor
    .save()
    .then((supervisor) => {
      res.send(supervisor);
      return;
    })
    .catch((error) => {
      res.status(500).send(error.message);
    });
});

//GET ALL SUPERVISOR
router.get("/", (req, res) => {
  Supervisor.find()
    .then((supervisor) => res.send(supervisor))
    .catch((error) => {
      res.status(500).send("something went Wrong");
    });
});
//Get the supervisor for particular id
router.get("/:supervisorId", (req, res) => {
  Supervisor.findById(req.params.supervisorId)
    .then((supervisor) => {
      if(supervisor){res.send(supervisor)
     return;
    }
      
      res.status(404).send("id not found");
    })
    .catch((error) => {
      res.status(404).send("not found");
    });
});

//update Supervisor detials
router.put("/:supervisorId", (req, res) => {
  Supervisor.findByIdAndUpdate(
    req.params.supervisorId,
    {
      supervisor: req.body.supervisor,
      project: req.body.project,
      industry: req.body.industry,
      supervisee: req.body.supervisee,
      supervisorid: req.body.supervisorid,
      senioritylevel: req.body.senioritylevel,
    },
    { new: true }
  )
    .then((updatedSupervisor) => {
      if (!updatedSupervisor) res.status(404).send("not found");
      res.send(updatedSupervisor);
    })
    .catch((error) => {
      res.status(404).send("record not found");
    });
});

router.delete("/:id", (req, res) => {
  Supervisor.deleteOne({ _id: req.params.id })
    .then((result) => {
      res.status(200).send("item deleted");
    })
    .catch((err) => {
      res.send("some error occur");
    });
});
module.exports = router;
