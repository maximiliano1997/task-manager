const TaskModel = require('../../models/Tasks')
const { BadRequestError, NotFoundError } = require('../../errors')
const { StatusCodes } = require('http-status-codes')


const updateTask = async (req, res) => {

    // Desestructuramos request
    const {
        user: { id: userId },
        body: { name, description, completed },
        params: { id: taskId },
    } = req

    console.log(req.body, req.params, req.user)
    console.log(req.body.completed)

    // Check for info/data in the req
    if (!name && !description && completed === undefined) {
        throw new BadRequestError(' There is no payload ')
    }

    // build payload for ejecution
    const payload = {}

    if (name) {
        payload.name = name
    }
    if (description) {
        payload.description = description
    }
    if (completed !== undefined) {
        payload.completed = completed
    }

    // Execution
    const task = await TaskModel.findByIdAndUpdate(taskId, payload)
    const newTask = await TaskModel.findOne({ _id: taskId })

    // Check if execution was successful
    if (!task) {
        throw new NotFoundError(`Task with ${taskId} Not Found`)
    }

    //Response for finalized OK
    res.status(StatusCodes.OK).json({ data: { taskUpdated: task._id, from: task.name, to: newTask.name }, success: true, error: false, message: 'Task Successfully updated!' })
}


module.exports = updateTask;
