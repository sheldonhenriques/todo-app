import { Request, Response} from 'express';
import Todo from './../models/todolistModel'

const getListItems = (req: Request, res: Response): void =>{
    Todo.find({listid: req.params.id}, (err, data) => {
        if(err) {
            return res.json({
                message: err.message
            })
        }
        res.render('todo', {data: {todos: data, listid: req.params.id}})
    })
}

const addListItem = (req: Request, res: Response): void =>{
    const newTodo = new Todo(req.body)
    newTodo.save((err, data) => {
        if(err) {
            return res.json({
                message: err.message
            })
        }
        res.json(data)
    })
}

const editListItem = (req: Request, res: Response): void =>{
    Todo.update({_id: req.params.id}, req.body, (err, data) => {
        if(err) {
            return res.json({
                message: err.message
            })
        }
        res.json(data)
    })
}


const deleteListItem = (req: Request, res: Response): void =>{
    Todo.deleteOne({_id: req.params.id}, (err, data) => {
        if(err) {
            return res.json({
                message: err.message
            })
        }
        res.json(data)
    })
}


export default {
    addListItem,
    editListItem,
    deleteListItem,
    getListItems
}