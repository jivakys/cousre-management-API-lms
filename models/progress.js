const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
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
          model: "Users",
          key: "userId",
        },
      },
      courseId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: "Courses",
          key: "courseId",
        },
      },
      completed: {
        type: DataTypes.ENUM("Initial", "In Progress", "Completed"),
        allowNull: false,
      },
    },
    {
      timestamps: true,
    }
  );

  Progress.associate = function (models) {
    Progress.belongsTo(models.User, { foreignKey: "userId" });
    Progress.belongsTo(models.Course, { foreignKey: "courseId" });
  };

  return Progress;
};
