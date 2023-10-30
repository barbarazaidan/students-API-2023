const validatedNewStudant = (req, res, next) => {
    const { nome, idade, professor, numeroSala, notaPrimeiroSemestre, notaSegundoSemestre, } = req.body;
    if (!nome || !idade  || !professor || !numeroSala) {
        return res.status(400).json({ message: 'Alguns campos estão vazios. É preciso inserir todas as informações do aluno!' });
    }

    if (typeof notaPrimeiroSemestre !== 'number' || typeof notaSegundoSemestre !== 'number') {
        return res.status(400).json({ message: 'As notas precisam ser um número!' });
    }
    next();
};

module.exports = validatedNewStudant;