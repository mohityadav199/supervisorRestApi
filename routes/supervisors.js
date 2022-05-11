const express=require('express');
const router= express.Router();
const Supervisor=require("../models/supervisors");
//POST: CREATE A NEW SUPREVISOR
router.post('/',(req,res)=>{

    supervisor=new Supervisor(
        {
            supervizer: req.body.supervizer,
            project: req.body.project,
            industry: req.body.industry,
            supervizee: req.body.supervizee,
            supervizerid: req.body.supervizerid
          }
    );

    supervisor.save().then(supervisor=>{
        res.send(supervisor);
    }).catch(error=>{
        res.status(500).send("supervisor not listed")
    })
})

module.exports=router;