const { DataTypes } = require("sequelize");
const sequelize = require("./index").sequelize;
const User = require("./user");

const Course = sequelize.define(
  "Course",
  {
    courseId: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    created_by: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: User,
        key: "userId",
      },
    },
  },
  {
    timestamps: true,
  }
);

module.exports = Course;
