const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
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
          model: "Users",
          key: "userId",
        },
      },
    },
    {
      timestamps: true,
    }
  );

  Course.associate = function (models) {
    Course.belongsTo(models.User, { foreignKey: "created_by" });
    Course.belongsToMany(models.User, {
      through: models.Progress,
      foreignKey: "courseId",
    });
  };

  return Course;
};
