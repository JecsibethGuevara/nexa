import  express from 'express'
const app = express();
import routes from './routes/mainRoutes.js'
import  cors from 'cors'
import  bodyParser from 'body-parser'

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors({
  origin: 'http://localhost:3000'
}))

app.use('/', routes)




app.listen(3001, () => {
  console.log('Express server listening on port 3001');
}); 