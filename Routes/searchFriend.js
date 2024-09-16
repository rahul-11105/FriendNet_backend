const user = require("../model/user");
const User = require("../model/user"); 
const express = require("express");
const routes = express.Router();

routes.post('/', async (req, res) => {
    try {
        
        //console.log("Received request body:", req.body);
        const user_name = req.body.Name;
        // Find users 
        //console.log(user_name);
        const users = await User.find({Name:user_name});
        // Check if users were found
        if (users.length === 0) {
            return res.status(404).send("No user exists with that name");
        }

        // Send the found users as JSON response
        res.json(users);
    } catch (err) {
        console.error("Error fetching users:", err);
        res.status(500).send("Server error");
    }
});

routes.get("/friends",async(req,res)=>{
    try {
        let friends = await User.find({});
        res.json(friends);
    }
    catch{
        res.send("<h1>no frns<h1>");
    }
});
module.exports = routes;
