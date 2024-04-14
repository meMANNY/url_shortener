const express = require("express");
const Url = require("../models/url");
const {restrictTo} = require("../middleware/auth");

const router  = express.Router();

router.get("/",restrictTo("[NORMAL") ,async (req,res)=>{
    if(!req.user) return res.redirect("/login");
    const allUrls = await Url.find({createdBy: req.user._id});
    return res.render("home", {urls: allUrls});

})

router.get("/signup", (req,res)=>{
    return res.render("signup");
})
router.get("/login", (req,res)=>{
    return res.render("login");
})



module.exports = router;