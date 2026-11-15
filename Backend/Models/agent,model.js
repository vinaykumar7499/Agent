import mongoose from "mongoose";

const agentSchema= new mongoose.Schema({
    userId:{
        type:mongoose.Schema.Type.ObjectId,
        ref:"User",
        require:true,

    },
    name:{
        type:String,
        require:true
    },
    knowledgeBase:{
        type:String
    },
    instruction:{type:String,
        require:true

    },
    tools:[
        {type:String,
        trim:true
        },

    ],
    isActive:{
        type:Boolean,
        default:true

    }

},{timestamps:true})


const Agent=mongoose.model("Agent",agentSchema)
export default Agent