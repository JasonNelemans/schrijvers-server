'use strict';
module.exports = (sequelize, DataTypes) => {
  const rating = sequelize.define('rating', {
    userId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    storyId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    amount: {
      type: DataTypes.INTEGER,
      allowNull: false,
    }
  }, {});
  rating.associate = function(models) {
    rating.belongsTo(models.user);
    rating.belongsTo(models.story);
  };
  return rating;
};