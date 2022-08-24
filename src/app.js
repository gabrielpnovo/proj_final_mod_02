import express from 'express';
import routes from './routes/roupasRoutes.js'

// inicializando o express
const app = express();

// recurso utilizado para permitir que a informação que está chegando (através de uma requisição "PUT" ou "POST", por exemplo) seja interpretada de maneira correta para que seja possível armazená-lo e/ou manipulá-lo;
// é utilizado para permitir que consigamos utilizar os "params" e "params.body" nas requisições
app.use(express.json())

// está passando para o caminho "./routes/roupasRoures.js" uma instância de app para que as rotas sejam direcionadas corretamente
routes(app);

// esse comando é utilizado para permitir que outro arquivo (no caso, o servidor (atualmente nesse projeto estamos utilizando o servidor local operado pelo arquivo "server.js", que é o que está fazendo a conexão com o localhost)) utilize esse arquivo
export default app