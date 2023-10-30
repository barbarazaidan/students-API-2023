const studentService = require('../services/studentService');

const getStudents = async (_req, res) => {
    const students = await studentService.getStudents();
    if (!students) {
      return res.status(404).json({ message: 'Estudantes não encontrados' });
    }
    return res.status(200).json(students);
};

const getStudentsById = async (req, res) => {
  const { id } = req.params;
  const student = await studentService.getStudentsById(id);
  if (!student) {
    return res.status(404).json({ message: 'Estudante não encontrado' });
  }
  return res.status(200).json(student);
};

const createNewStudent = async (req, res) => {
  const { nome, idade, notaPrimeiroSemestre, notaSegundoSemestre, professor, numeroSala } = req.body;
  const studentDate = { nome, idade, notaPrimeiroSemestre, notaSegundoSemestre, professor, numeroSala };
  const newStudent = await studentService.createNewStudent(studentDate);
  console.log(newStudent, 'newStudent');
  if (!newStudent) {
    return res.status(400).json({ message: 'Estudante já existe no banco de dados' });
  }
  return res.status(201).json(newStudent);
};

const editStudent = async (req, res) => {
  const { id } = req.params;
  const { nome, idade, notaPrimeiroSemestre, notaSegundoSemestre, professor, numeroSala } = req.body;
  const studentDate = { nome, idade, notaPrimeiroSemestre, notaSegundoSemestre, professor, numeroSala };
  const student = await studentService.editStudent(id, studentDate);

  if (student === null) {
    return res.status(404).json({ message: 'Estudante não encontrado' });
  }
  if (student === false) {
    return res.status(400).json({ message: 'Os dados inseridos são iguais aos dados já cadastrados' });
  }

  const studentEdited = await studentService.getStudentsById(id);

  return res.status(200).json(studentEdited);
};

const deleteStudent = async (req, res) => {
  const { id } = req.params;
  const studentToDelete = await studentService.deleteStudent(id);
  if (!studentToDelete) {
    return res.status(404).json({ message: 'Estudante não encontrado' });
  }
  return res.status(204).send();
};

module.exports = {
  getStudents,
  getStudentsById,
  createNewStudent,
  editStudent,
  deleteStudent,
};
