import express from "express"
import cors from "cors"
import dotenv from "dotenv"

dotenv.config()
const app = express()
app.use(cors())
app.use(express.json())

const autenticacaoRoutes = require('./routes/autenticacaoRoutes');
const pacienteRoutes = require('./routes/pacienteRoutes');
const prontuarioRoutes = require('./routes/prontuarioRoutes');

app.use('/api/autenticacao', autenticacaoRoutes);
app.use('/api/pacientes', pacienteRoutes);
app.use('/api/prontuarios', prontuarioRoutes);

app.get("/", (req, res) => {
    res.send("API está em funcionamento");
});

app.listen(process.env.PORT,()=>{
  console.log(`🚀 API rodando na porta ${process.env.PORT} http://localhost:${process.env.PORT} `)
})