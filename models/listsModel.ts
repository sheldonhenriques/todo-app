import mongoose from 'mongoose'
import Todo from './todolistModel'

const tagSchema = new mongoose.Schema({
    tag: {
        type: String,
        required: true
    }
})

const listsSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    tags: [tagSchema],
    userid: {
        type: String,
        required: true,
    }
}, {timestamps: true})

// remove all associated to do items with the list before deleting list
listsSchema.pre('remove', {query: true}, function(next) {
    Todo.deleteMany({listid: this._id}).exec()
    next()
})

const Lists = mongoose.model('Lists', listsSchema)

export = Lists