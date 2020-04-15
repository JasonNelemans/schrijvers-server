"use strict";
module.exports = (sequelize, DataTypes) => {
  const story = sequelize.define(
    "story",
    {
      title: DataTypes.STRING,
      type: DataTypes.STRING,
      genre: DataTypes.STRING,
      wordCount: DataTypes.INTEGER,
      userId: {
        type: DataTypes.INTEGER,
        allowNull: false
      },
    },
    {}
  );
  story.associate = function (models) {
    // associations can be defined here
  };
  return story;
};
