import express  from 'express';
import cors from 'cors';
import path from 'path';
import routes from './routes';

const app = express();
app.use(cors());

app.use(express.json());

const port = 3333;

// GET: Buscar uma ou mais informações do back-end
// POST: Criar uma nova informação no back-end
// PUT: Atualizar uma informação existente no back-end
// DELETE: Remover uma informação no back-end

// Request Params: Parametro que vem na própria rota de identifica um recurso
// Query Param: Parametros que vem na rota opicionais
// Request Body: Parametros para criação/atualização
app.use(routes);
app.use('/uploads', express.static(path.resolve(__dirname, '..', 'uploads')));

app.listen(port);