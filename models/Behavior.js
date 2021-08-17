const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Behavior extends Model {
  checkPassword(loginPw) {
    return bcrypt.compareSync(loginPw, this.password);
  }
}

Behavior.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    behavior: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    student_id: {
      type:DataTypes.INTEGER,
      references: {
        model: 'student',
        key:'id'
      }
    }
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'behavior',
  }
);

module.exports = Behavior;
