"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      "stories",
      [
        {
          title: "First Lorem Ipsum",
          type: 'Original fiction',
          genre: 'Mystery',
          wordCount: 1500,
          userId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "Second Lorem Ipsum",
          type: 'Fan fiction',
          genre: 'Fantasy',
          wordCount: 1400,
          userId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "Third Lorem Ipsum",
          type: 'True story',
          genre: 'Romance',
          wordCount: 1450,
          userId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "Fourth Lorem Ipsum",
          type: 'Original fiction',
          genre: 'Thriller',
          wordCount: 1300,
          userId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "Fifth Lorem Ipsum",
          type: 'True story',
          genre: 'Horror',
          wordCount: 1500,
          userId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "Sixth Lorem Ipsum",
          type: 'Original fiction',
          genre: 'Mystery',
          wordCount: 1500,
          userId: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "Seventh Lorem Ipsum",
          type: 'Fan fiction',
          genre: 'Science-fiction',
          wordCount: 1222,
          userId: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "Eigth Lorem Ipsum",
          type: 'True story',
          genre: 'Coming-of-age',
          wordCount: 1150,
          userId: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "Ninth Lorem Ipsum",
          type: 'Original fiction',
          genre: 'Crime',
          wordCount: 1500,
          userId: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "Tenth Lorem Ipsum",
          type: 'True story',
          genre: 'Crime',
          wordCount: 999,
          userId: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  down: (queryInterface, Sequelize) => {
      return queryInterface.bulkDelete('users', null, {});
  },
};
