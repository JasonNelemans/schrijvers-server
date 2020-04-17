'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    await queryInterface.addColumn("paragraphs", "paragraphNumber", {
      type: Sequelize.INTEGER,
      onUpdate: "CASCADE",
      onDelete: "SET NULL",
      allowNull: false
    });
  },
  down: (queryInterface, Sequelize) => {
      return queryInterface.removeColumn("paragraphs", "paragraphNumber");
  }
};
