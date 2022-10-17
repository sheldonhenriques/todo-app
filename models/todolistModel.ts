import mongoose from 'mongoose'

mongoose.connect(process.env.MONGO_URI);

const todoSchema = new mongoose.Schema({
    listid: {
        type: String,
        required: true
    },
    item: {
        type: String,
        required: true
    },
    status: {
        type: String,
        enum: ['Pending', 'Done'],
        default: 'Pending'
    },
    deadline: Date
}, {timestamps: true})

const Todo = mongoose.model('Todo', todoSchema)

export = Todo