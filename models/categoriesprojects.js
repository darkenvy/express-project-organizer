'use strict';
module.exports = function(sequelize, DataTypes) {
  var categoriesProjects = sequelize.define('categoriesProjects', {
    categoryId: DataTypes.INTEGER,
    projectId: DataTypes.INTEGER
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
        // models.categoriesProjects.hasMany(models.project);
        // models.categoriesProjects.hasMany(models.category);

      }
    }
  });
  return categoriesProjects;
};
