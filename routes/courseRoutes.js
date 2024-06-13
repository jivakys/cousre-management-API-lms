const express = require("express");
const courseRouter = express.Router();
const courseController = require("../controllers/courseControllers");
const auth = require("../middleware/auth");

courseRouter.get("/courses/:id", auth, courseController.getCourseById);
courseRouter.get("/courses", courseController.getAllCourses);
courseRouter.post("/courses", auth, courseController.createCourse);
courseRouter.put("/courses/:id", auth, courseController.updateCourse);
courseRouter.delete("/courses/:id", auth, courseController.deleteCourse);

module.exports = courseRouter;
