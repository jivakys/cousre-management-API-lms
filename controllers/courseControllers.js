const db = require("../models");
const Course = db.Course;
const { Op } = require("sequelize");

const getCourseById = async (req, res) => {
  try {
    const course = await Course.findByPk(req.params.id);
    if (!course) {
      return res.status(404).json({ message: "Course not found" });
    }
    res.json({ course, message: "Course Details Found" });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

const getAllCourses = async (req, res) => {
  try {
    const { page = 1, limit = 10, search = "", createdBy } = req.query;

    const whereClause = {
      title: {
        [Op.like]: `%${search}%`,
      },
    };

    if (createdBy) {
      whereClause.created_by = createdBy;
    }

    const courses = await Course.findAndCountAll({
      where: whereClause,
      limit: parseInt(limit),
      offset: (page - 1) * limit,
    });

    res.json({
      totalItems: courses.count,
      totalPages: Math.ceil(courses.count / limit),
      currentPage: parseInt(page),
      courses: courses.rows,
    });
  } catch (err) {
    res.status(500).json({ error: err.message });
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
    res.status(201).json({ course, message: "New Course Created" });
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
  getCourseById,
  getAllCourses,
  createCourse,
  updateCourse,
  deleteCourse,
};
