const db = require("../models");
const Course = db.Course;
const User = db.User;

const getCourses = async (req, res) => {
  try {
    const courses = await Course.findAll();
    res.json({ List_Of_All_Courses: courses });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

const getCourseById = async (req, res) => {
  try {
    const course = await Course.findByPk(req.params.id);
    if (!course) {
      return res.status(404).json({ message: "Course not found" });
    }
    res.json(course);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

const createCourse = async (req, res) => {
  try {
    if (req.user.role !== "teacher") {
      return res.status(403).json({ message: "Access denied" });
    }
    const { title, description } = req.body;
    const course = await Course.create({
      title,
      description,
      created_by: req.user.id,
    });
    res.status(201).json(course);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

const updateCourse = async (req, res) => {
  try {
    const course = await Course.findByPk(req.params.id);
    if (!course) {
      return res.status(404).json({ message: "Course not found" });
    }
    if (req.user.role !== "teacher" || req.user.id !== course.created_by) {
      return res.status(403).json({ message: "Access denied" });
    }
    const { title, description } = req.body;
    await course.update({ title, description });
    res.json(course);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

const deleteCourse = async (req, res) => {
  try {
    const course = await Course.findByPk(req.params.id);
    if (!course) {
      return res.status(404).json({ message: "Course not found" });
    }
    if (req.user.role !== "teacher" || req.user.id !== course.created_by) {
      return res.status(403).json({ message: "Access denied" });
    }
    await course.destroy();
    res.status(204).send("Course Deleted Successfully.");
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

module.exports = {
  getCourses,
  getCourseById,
  createCourse,
  updateCourse,
  deleteCourse,
};
