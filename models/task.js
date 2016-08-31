'use strict';
module.exports = function(sequelize, DataTypes) {
  var Task = sequelize.define('Task', {
    name: DataTypes.STRING,
    completed_at: DataTypes.INTEGER,
    done: DataTypes.BOOLEAN,
    UserId: DataTypes.INTEGER
  }, {
    classMethods: {
      associate: function(models) {
        Task.belongsTo(models.User);
      }
    }
  });
  return Task;
};