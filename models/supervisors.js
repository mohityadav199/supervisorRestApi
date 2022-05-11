const mongoose=require('mongoose');


//supervisor Schema
const SupervisorSchema=new mongoose.Schema(
    {
        supervizer:{
            type:String,
            required:true,
            minlength:3,
            maxlength:20
        },
        project:{
            type:String,
            required:true,
            minlength:3,
            maxlength:100
        },
        industry:{
            type:String,
            required:true,
            minlength:3,
            maxlength:100
        },
        supervizee:{
            type:Number,
            require:true,
            min:0,
            max:100
        },
        supervizerid:{
            type:Number,
            require:true
        }
    }
)

module.exports=new mongoose.model('supervisor',SupervisorSchema);