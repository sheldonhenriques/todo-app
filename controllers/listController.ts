import { Request, Response} from 'express';
import Lists from './../models/listsModel'

const getList = (req: Request, res: Response): void =>{
    
    Lists.find({userid: req.params.userid}, (err, data) => {
        if(err) {
            return res.json({
                message: err.message
            })
        }
        res.render('list', { data:{lists: data, userid: req.params.userid}})
    })
}

const addList = (req: Request, res: Response): void =>{
    const options = {...req.body, tags: [ {tag: req.body.tag}]}
    const newList = new Lists(options)
    newList.save((err, data) => {
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

const searchListWithName = (req: Request, res: Response): void =>{
    //find all the lists of user with id=userid and name=name
    Lists.find({userid: req.query.userid, name: req.query.name}, function(err, data) {
        if(err) {
            res.json({
                message: err.message
            })
        }
        res.json(data)
    });
}

const searchListWithTag = (req: Request, res: Response): void =>{
    //find all lists of user with id=userid that has a tag=tag
    Lists.find({userid: req.query.userid, tags: {tag: req.query.tag}}, function(err, data) {
        if(err) {
            res.json({
                message: err.message
            });
        }
        res.json(data);
    })
}


export default {
    addList,
    deleteList,
    getList,
    searchListWithName,
    searchListWithTag
}