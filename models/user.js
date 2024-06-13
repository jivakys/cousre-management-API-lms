const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  const User = sequelize.define(
    "User",
    {
      userId: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
      },
      password: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      role: {
        type: DataTypes.ENUM("student", "teacher"),
        allowNull: false,
      },
    },
    {
      timestamps: true,
    }
  );

  User.associate = function (models) {
    User.hasMany(models.Course, { foreignKey: "created_by" });
    User.belongsToMany(models.Course, {
      through: models.Progress,
      foreignKey: "userId",
    });
  };

  return User;
};
