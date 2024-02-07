import app from './app';
import dotenv from 'dotenv';
dotenv.config();


const SERV_PORT = Number(process.env.SERV_PORT) || 3333;
const SERV_PROD = Number(process.env.SERV_PROD) == 1 ? "produção" : "desenvolvimento";


app.listen(SERV_PORT, () => {
    console.log(`Servidor rodando na porta ${SERV_PORT} no modo ${SERV_PROD}`);
})