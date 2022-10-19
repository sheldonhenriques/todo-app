import { Request, Response} from 'express';
import jwt from 'jsonwebtoken'
import Person from './../models/personModel'

const login = (req: Request, res: Response): void =>{
    // save the new user in mongodb

    Person.findOne({ email: req.body.email }, function(err, data) {
        if(err) {
            res.json({
                message: err.message
            })
        }
        if (data && req.body.password === data.password){
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
            data.token = token
            res.cookie('token', token, options)
        }
        res.json(data)
    })
}

export default {
    login
}