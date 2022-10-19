import { Request, Response} from 'express';
import Lists from './../models/todolistModel'

const getList = (req: Request, res: Response): void =>{
    Lists.find({userid: req.params.userid}, (err, data) => {
        if(err) {
            return res.json({
                message: err.message
            })
        }
        res.render('list', {lists: data})
    })
}

const addList = (req: Request, res: Response): void =>{
    const newTodo = new Lists(req.body)
    newTodo.save((err, data) => {
        if(err) {
            return res.json({
                message: err.message
            })
        }
        res.json(data)
    })
}


const deleteList = (req: Request, res: Response): void =>{
    Lists.deleteOne({_id: req.params.id}, (err, data) => {
        if(err) {
            return res.json({
                message: err.message
            })
        }
        res.json(data)
    })
}


export default {
    addList,
    deleteList,
    getList
}