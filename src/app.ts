require('dotenv').config()
import express from 'express'
import  todoController from '../controllers/todoController'
import { routes } from '../util/constants'

// const urlencodedParser = bodyParser.json();

const app = express()
const port = 3000

app.set('view engine', 'ejs')

app.use(express.static('./public'))

app.use(express.json());       // to support JSON-encoded bodies
app.use(express.urlencoded());

app.get(routes.todo, todoController.getListItems)

app.post(routes.todo, todoController.addListItem)

app.delete(routes.todoId, todoController.deleteListItem)

app.listen(port, () => {
   // eslint-disable-next-line no-console
   console.log({ level: "info", message: `Express is listening at http://localhost:${port}`})
})