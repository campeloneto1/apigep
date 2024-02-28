import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import morgan from 'morgan';
import connection from './connection';

import AuthRoutes from './routes/auth.routes';
import UserRoutes from './routes/user.routes';
import OrgaoRoutes from './routes/orgao.routes';
import PerfilRoutes from './routes/perfil.routes';
import ProcessoRoutes from './routes/processo.routes';
import ProcessoTipoRoutes from './routes/processo-tipo.routes';
import ProcessoSubtipoRoutes from './routes/processo-subtipo.routes';
import SetorRoutes from './routes/setor.routes';
import StatusRoutes from './routes/status.routes';

const app = express();

app.use(cors());
app.use(helmet());
app.use(morgan('tiny'));

app.use(express.json());

app.use('/auth', AuthRoutes);
app.use('/orgaos', OrgaoRoutes);
app.use('/perfis', PerfilRoutes);
app.use('/processos', ProcessoRoutes);
app.use('/processos-tipos', ProcessoTipoRoutes);
app.use('/processos-subtipos', ProcessoSubtipoRoutes);
app.use('/setores', SetorRoutes);
app.use('/status', StatusRoutes);
app.use('/users', UserRoutes);

connection.sync().then(() => {
    console.log(`Banco de dados conectado com sucesso`);
})

export default app;