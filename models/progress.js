const { DataTypes } = require("sequelize");
const sequelize = require("./index").sequelize;
const User = require("./user");
const Course = require("./course");

const Progress = sequelize.define(
  "Progress",
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    userId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: User,
        key: "userId",
      },
    },
    courseId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: Course,
        key: "courseId",
      },
    },
    progress: {
      type: DataTypes.ENUM("Initial", "In Progress", "Completed"),
      allowNull: false,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = Progress;
