const express = require('express');
const studentController = require('../controllers/studentController');
const validatedNewStudant = require('../middlewares/validatedNewStudant');

const studentRouter = express.Router();

studentRouter.get('/', studentController.getStudents);
studentRouter.get('/:id', studentController.getStudentsById);
studentRouter.post('/', validatedNewStudant, studentController.createNewStudent);
studentRouter.put('/:id', validatedNewStudant, studentController.editStudent);
studentRouter.delete('/:id', studentController.deleteStudent);

module.exports = studentRouter;