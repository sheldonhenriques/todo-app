import { Request, Response} from 'express';
import Person from './../models/personModel'

const userSignUp = (req: Request, res: Response): void =>{
    // save the new user in mongodb
    new Person(req.body).save(function(err, data){
        if(err) {
            res.json({
                message: err.message
            })
        }
        res.json(data)
    })
}

// endpoint to get user profile details from database
const getUserProfile = (req: Request, res: Response): void =>{
    //find user by userid
    Person.find({_id: req.params.id}, function(err, data) {
        if(err) {
            res.json({
                message: err.message
            })
        }
        res.json(data)
    })
}

//endpoint to edit user info
const editUserProfile = (req: Request, res: Response): void =>{
    //update user info of user
    Person.update({_id: req.params.id}, req.body, function(err, data) {
        if(err) {
            res.json({
                message: err.message
            })
        }
        res.json(data)
    })
}

// endpoint to delete user profile
const deleteUserProfile = (req: Request, res: Response): void =>{
    //delete user from database
    Person.deleteOne({_id: req.params.id}, function(err, data){
        if(err) {
            res.json({
                message: err.message
            })
        }
        res.json(data)
    })
}

export default {
    userSignUp,
    getUserProfile,
    editUserProfile,
    deleteUserProfile
}