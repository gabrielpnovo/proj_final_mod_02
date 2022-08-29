import express from 'express';
import routes from './routes/roupasRoutes.js'

import parser from 'body-parser'
const urlencodedParser = parser.urlencoded({extended : false});

const app = express();

app.use(parser .json());
app.use(urlencodedParser)

app.use(express.json())

routes(app);

export default app