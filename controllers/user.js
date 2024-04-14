const User = require('../models/user'); 

async function handleUserSignUp(req,res){
    const {name,email,password} = req.body;
    const newUser = new User({
        name,
        email,
        password
    });
    return res.redirect('/'); 
}

async function handleUserLogin(req,res){
    const {email,password} = req.body;
    const user = await User.findOne({email,password});
    if(!user)
        return res.render("login",{
    error: "Invalid email or password"})
    return res.redirect('/'); 
}

module.exports = {
    handleUserSignUp,
    handleUserLogin
}   // Path: routes/user.js