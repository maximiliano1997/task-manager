const mongoose = require('mongoose')
const { Schema } = mongoose


const TaskSchema = new Schema({
    name: {
        type: String,
        required: [true, 'Please provide a task name']
    },
    completed: {
        type: Boolean,
        default: false,
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
    createdBy: {
        type: mongoose.Types.ObjectId,
        ref: 'user',
        requried: true
    }
})


const TaskModel = mongoose.model('Task', TaskSchema)

module.exports = TaskModel;
