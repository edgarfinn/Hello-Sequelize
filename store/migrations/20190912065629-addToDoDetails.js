'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.sequelize.transaction((t) => {
      return Promise.all([
        queryInterface.addColumn('Todos', 'description', {
          type: Sequelize.TEXT
        }, { transaction: t }),
        queryInterface.addColumn('Todos', 'completed', {
          type: Sequelize.BOOLEAN,
          allowNull: false,
          defaultValue: false,
        }, { transaction: t }),
      ])
    })
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.sequelize.transaction((t) => {
      return Promise.all([
        queryInterface.removeColumn('Todos', 'description', { transaction: t }),
        queryInterface.removeColumn('Todos', 'completed', { transaction: t }),
      ])
    })
  }
};
