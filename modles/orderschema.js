import mongoose from "mongoose";

const orderschema = new mongoose.Schema({
    name:{
        type: String,
        require:true,
    },
     email:{
        type: String,
        require:true,
    },
     date:{
        type: String,
        require:true,
    },
     packages:{
        type: String,
        require:true,
    },
     massages:{
        type: String,
        require:true,
    }, 
     status:{
        type: String,
       enum:["pending" ,"confirmed","Declined"],
       default: "pending"
    }, 
},{timestamps:true});

const orders = mongoose.model("Order",orderschema)
export default orders ;