import { Request, Response} from 'express'
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
import Person from './../models/personModel'

const userSignUp = async (req: Request, res: Response): Promise<void> =>{
    // save the new user in mongodb
    const body = req.body
    body.password = await bcrypt.hash(req.body.password, 10)
    new Person(body).save(function(err, data){
        if(err) {
            res.json({
                message: err.message
            })
        }
        const token = jwt.sign(
            { user_id: data._id, email: data.email },
            process.env.TOKEN_KEY,
            {
            expiresIn: "5h",
            }
        );
        let options = {
            maxAge: 1000 * 60 * 300, // would expire after 5 hours
            httpOnly: true, // The cookie only accessible by the web server
            secure: true,
            signed: true // Indicates if the cookie should be signed
        }
        res.cookie('token', token, options)
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