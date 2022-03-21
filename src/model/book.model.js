const mongoose = require("mongoose");

const bookSchema = new mongoose.Schema(
    {
    coverImage:{type:String,required:true},
     content :{type:String,required:true},
     likes:{type:Number,required:true},
     userId:{
         type:mongoose.Schema.Types.ObjectId,
         ref:"user",
         required:true,
    },
    
    },{
        timestamps:true,
    }
);

const Book = mongoose.model("book",bookSchema);

module.exports = Book;
