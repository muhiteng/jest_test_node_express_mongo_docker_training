// 3rd party libraries
const express = require("express");

// own libraries
const authController = require("./auth.controller");

// create the category router
const authRouter = express.Router();

// define the routes
authRouter.route("/register").post(authController.register);

module.exports = authRouter;
