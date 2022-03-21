const express = require("express");

const app = express();
app.use(express.json());
const connect = require("./config/db");
const User = require("../model/user.model");
const Book = require("../model/book.model");
const Publication = require("../model/publication.model");
const Comment = require("../model/comment.model");

const router = express.Router();

router.post("/user", async(req,res) =>{
   try{
       const user = User.create(req.body);
       return res.status(201).send(user);
   }catch(err){
    return res.status(500).send({massage:err.massage});
   }
});
router.post("/book", async(req,res) =>{
    try{
        const book = Book.create(req.body);
        return res.status(201).send(book);
    }catch(err){
     return res.status(500).send({massage:err.massage});
    }
 });

 router.post("/comment", async(req,res) =>{
    try{
        const comment = Comment.create(req.body);
        return res.status(201).send(comment);
    }catch(err){
     return res.status(500).send({massage:err.massage});
    }
 });

app.listen(4444, async() => {
 
     try{
       await connect();
       console.log("listening 4444......");
     }catch{
         console.log(error.massage);
     }
});