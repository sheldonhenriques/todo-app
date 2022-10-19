import { Request, Response} from 'express';

const index = (req: Request, res: Response): void =>{
    res.render('index')
}

export default {
    index
}