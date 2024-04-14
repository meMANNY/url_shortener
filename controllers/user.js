const User = require('../models/user'); 

async function handleUserSignUp(req,res){
    const {name,email,password} = req.body;
    const newUser = new User({
        name,
        email,
        password
    });
    return res.render("home"); 
}

module.exports = {
    handleUserSignUp
}   // Path: routes/user.js