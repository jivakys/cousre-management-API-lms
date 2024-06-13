const db = require("../models");
const Progress = db.Progress;

const getUserProgress = async (req, res) => {
  try {
    const progress = await Progress.findAll({
      where: { userId: req.params.id },
    });
    res.json(progress);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

const updateUserProgress = async (req, res) => {
  try {
    const { courseId, progress } = req.body;
    let userProgress = await Progress.findOne({
      where: { userId: req.params.id, courseId },
    });
    if (userProgress) {
      userProgress.progress = progress;
      await userProgress.save();
    } else {
      userProgress = await Progress.create({
        userId: req.params.id,
        courseId,
        progress,
      });
    }
    res.json(userProgress);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

module.exports = { getUserProgress, updateUserProgress };
