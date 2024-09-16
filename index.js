const express = require("express");
const app = express();
const main = require("./connection/connectToDb");
const user = require("./model/user");
const searchFriend = require("./Routes/searchFriend");
const port = process.env.PORT || 8000;
const cors = require('cors');
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended:true}));


const uri = "mongodb+srv://rahullokhande11105:rahul11105@cluster0.yzyo5.mongodb.net/";
//mongoDB connection
main(uri).then((res)=>{
    console.log("DB connected successfully");
})
.catch((err)=>{
    console.log("mongoDB connection error",err);
});

//routes
app.use('/users',searchFriend);
// app.get("/",async(req,res)=>{
//     const user1 = new user({
//         Name:"rahul",
//         Email:"rahullokhande@11105gmail.com"
//     });
//     try {
//         await user1.save();
//         res.send("<h1>Welcome to FriendNet</h1>");
//     } catch (err) {
//         res.status(500).send("Error saving user: " + err.message);
//     }
    
// }); 

app.listen(port,()=>{
    console.log(`app is listening at port ${port}`);
}); 