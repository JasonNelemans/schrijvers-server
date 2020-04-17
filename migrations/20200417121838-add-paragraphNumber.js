'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.addColumn("paragraphs", "paragraphNumber", {
      type: Sequelize.INTEGER,
      onUpdate: "CASCADE",
      onDelete: "SET NULL",
      allowNull: false
    });
  },
  down: async (queryInterface, Sequelize) => {
      return queryInterface.removeColumn("paragraphs", "paragraphNumber");
  }
};
