module.exports = {
  /**
   *
   * @param {import('sequelize').QueryInterface} queryInterface
   * @param {import('sequelize')} Sequelize
   */

  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("students", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      nome: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      idade: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      nota_primeiro_semestre: {
        type: Sequelize.INTEGER,
      },
      nota_segundo_semestre: {
        type: Sequelize.INTEGER,
      },
      professor: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      numero_sala: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
    });
  },

  /**
   *
   * @param {import('sequelize').QueryInterface} queryInterface
   * @param {import('sequelize')} Sequelize
   */

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("students");
  },
};

