const express = require("express");
const progressRouter = express.Router();
const progressController = require("../controllers/progressController");
const auth = require("../middleware/auth");

progressRouter.get(
  "/users/:id/progress",
  auth,
  progressController.getUserProgress
);
progressRouter.post(
  "/users/:id/progress",
  auth,
  progressController.updateUserProgress
);

module.exports = progressRouter;
