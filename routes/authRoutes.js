const express = require("express");
const authRouter = express.Router();
const authController = require("../controllers/authControllers");

authRouter.post("/register", authController.register);
authRouter.post("/login", authController.login);

module.exports = authRouter;
