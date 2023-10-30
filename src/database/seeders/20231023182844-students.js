module.exports = {
  up: async (queryInterface, _Sequelize) => {
    await queryInterface.bulkInsert('students',
      [{
        id: 1,
        nome: 'Ana Costa',
        idade: 10,
        nota_primeiro_semestre: 9.5,
        nota_segundo_semestre: 10,
        professor: 'Guedes',
        numero_sala: 12,
      },{
        id: 2,
        nome: 'Enzo Medeiros',
        idade: 9,
        nota_primeiro_semestre: 7,
        nota_segundo_semestre: 8.1,
        professor: 'Guedes',
        numero_sala: 12,
      },{
        id: 3,
        nome: 'Luna Andrade',
        idade: 12,
        nota_primeiro_semestre: 8,
        nota_segundo_semestre: 6,
        professor: 'Mônica',
        numero_sala: 14,
      },{
        id: 4,
        nome: 'Luiz Eduardo Júnior',
        idade: 12,
        nota_primeiro_semestre: 6,
        nota_segundo_semestre: 9.5,
        professor: 'Mônica',
        numero_sala: 14,
      },{
        id: 5,
        nome: 'Roberto Silva',
        idade: 11,
        nota_primeiro_semestre: 6,
        nota_segundo_semestre: 7.5,
        professor: 'Mônica',
        numero_sala: 14,
      },{
        id: 6,
        nome: 'Lilian de Oliveira',
        idade: 10,
        nota_primeiro_semestre: 7,
        nota_segundo_semestre: 7.6,
        professor: 'Guedes',
        numero_sala: 12,
      },{
        id: 7,
        nome: 'Alan Muniz',
        idade: 11,
        nota_primeiro_semestre: 10,
        nota_segundo_semestre: 10,
        professor: 'Guedes',
        numero_sala: 12,
      },{
        id: 8,
        nome: 'Bárbara Valdez',
        idade: 9,
        nota_primeiro_semestre: 9,
        nota_segundo_semestre: 9.5,
        professor: 'Guedes',
        numero_sala: 12,
      },{
        id: 9,
        nome: 'Camila Guimarães',
        idade: 10,
        nota_primeiro_semestre: 8,
        nota_segundo_semestre: 7,
        professor: 'Guedes',
        numero_sala: 12,
      },{
        id: 10,
        nome: 'Iris Garrett',
        idade: 13,
        nota_primeiro_semestre: 7,
        nota_segundo_semestre: 6,
        professor: 'Mônica',
        numero_sala: 14,
      },{
        id: 11,
        nome: 'José Antônio Costa',
        idade: 12,
        nota_primeiro_semestre: 6,
        nota_segundo_semestre: 6,
        professor: 'Mônica',
        numero_sala: 14,
      },{
        id: 12,
        nome: 'Maria Carolina de Souza',
        idade: 12,
        nota_primeiro_semestre: 5,
        nota_segundo_semestre: 5.5,
        professor: 'Mônica',
        numero_sala: 14,
      },
      ], { timestamps: false });
  },

  down: async (queryInterface, _Sequelize) => {
    await queryInterface.bulkDelete('students', null, {});
  },
};