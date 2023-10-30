const e = require('express');
const { Student } = require('../database/models');

// aqui não preciso colocar async e await, pois já estou fazendo o processo de aguardar a promise no controller
const getStudents = () => Student.findAll();

const getStudentsById = (id) => Student.findByPk(id);

const createNewStudent = async(studentDate) => {
    const student = await Student.findOne({ where: { nome: studentDate.nome } });
    console.log(student, 'student');
    if (student) return false;
    return Student.create(studentDate);
}

const editStudent = async (id, studentDate) => {
    const studentToEdit = await Student.findByPk(id);
    if (!studentToEdit) return null;
    const [student] = await Student.update(studentDate, { where: { id } });
    if (!student) return false;
    return student;
}

const deleteStudent = async (id) => {
    const studentToDelete = await Student.findByPk(id);
    if (!studentToDelete) return false;
    await Student.destroy({ where: { id } });
    return true;
};

module.exports = { 
    getStudents,
    getStudentsById,
    createNewStudent,
    editStudent,
    deleteStudent,
};