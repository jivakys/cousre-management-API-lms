const express = require("express");
const progressRouter = express.Router();
const progressController = require("../controllers/progressControllers");
const auth = require("../middleware/auth");

progressRouter.get("/progress/:id", auth, progressController.getUserProgress);
progressRouter.post(
  "/progress/:id",
  auth,
  progressController.updateUserProgress
);

module.exports = progressRouter;
