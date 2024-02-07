import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import morgan from 'morgan';
import connection from './connection';

import AuthRoutes from './routes/auth.routes';
import UserRoutes from './routes/user.routes';
import PerfilRoutes from './routes/perfil.routes';

const app = express();

app.use(cors());
app.use(helmet());
app.use(morgan('tiny'));

app.use(express.json());

app.use('/users', UserRoutes);
app.use('/perfis', PerfilRoutes);
app.use('/auth', AuthRoutes);

connection.sync().then(() => {
    console.log(`Banco de dados conectado com sucesso`);
})

export default app;