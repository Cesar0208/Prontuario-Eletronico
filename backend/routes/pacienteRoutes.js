const express = require('express');
const router = express.Router();
const pacienteController = require('../controllers/pacienteController');
const authMiddleware = require('../middleware/authMiddleware');

// Todas as rotas de pacientes protegidas por Token
router.use(authMiddleware); 

// Colocar as rotas de pacientes
router.get('/', pacienteController.listarTodos);
router.post('/cadastro', pacienteController.criarPaciente);

module.exports = router;