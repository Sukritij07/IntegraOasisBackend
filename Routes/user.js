const express = require("express");
const router = express.Router();
const userController = require("./userController");

router.post("/signup", userController.signUp);
router.post("/login", userController.login);
router.post("/verify-otp", userController.verifyOtp);
router.post("/forgot-password", userController.forgotPassword);
router.post("/reset-password", userController.resetPassword);
router.get("/profile/:userId", userController.profile);
module.exports = router;
