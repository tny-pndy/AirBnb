const express=require("express");
const router=express.Router();
const Listing=require("../models/listing.js");
const User=require("../models/user.js"); 
const wrapAsync = require("../utils/wrapAsync");
const passport=require("passport");
const {saveRedirectUrl}=require("../middleware.js");
const userController=require("../controllers/users.js");
router.get("/signup",userController.renderSignup);
//router.route bhi use kr skte hai...cose ko coompact bnane ke liye

router.post("/signup",wrapAsync(userController.signup));
router.get("/login",saveRedirectUrl,userController.renderLoginForm)
router.post("/login",saveRedirectUrl,passport.authenticate("local",{failureRedirect:'/login',failureFlash:true}),userController.login)
router.get("/logout",userController.logout)
module.exports=router;