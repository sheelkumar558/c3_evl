const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
    {
     firstName:{type:String,required:true},
     lastName:{type:String,required:false},
     age:{type:Number,required:true},
     eamil:{type:String,required:true},
     profileImages:{type:String,required:true},
    },{
        timestamps:true,
    }
);

const User = mongoose.model("user",userSchema);

module.exports = User;
