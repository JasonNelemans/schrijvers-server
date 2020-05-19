"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      "ratings",
      [
        {
          storyId: 1, 
          userId: 1, 
          amount: 5,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          storyId: 2, 
          userId: 1, 
          amount: 4,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          storyId: 3, 
          userId: 1, 
          amount: 5,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          storyId: 1, 
          userId: 2, 
          amount: 5,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          storyId: 2, 
          userId: 2, 
          amount: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          storyId: 3, 
          userId: 2, 
          amount: 4,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  down: (queryInterface, Sequelize) => {
      return queryInterface.bulkDelete('ratings', null, {});
  },
};
