const express = require('express');
const router = express.Router();
const pacienteController = require('../controllers/pacienteController');
const auth = require('../middleware/autenticacaoMiddleware'); // Importa o "segurança"

// Opção A: Proteger TODAS as rotas deste arquivo
router.use(auth);

// Colocar as rotas de pacientes
router.get('/', pacienteController.listarTodos);
router.post('/cadastro', pacienteController.criarPaciente);

module.exports = router;