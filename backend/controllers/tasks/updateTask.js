const TaskModel = require('../../models/Tasks')
const { BadRequestError, NotFoundError } = require('../../errors')
const { StatusCodes } = require('http-status-codes')


const updateTask = async (req, res) => {

    // Desestructuramos request
    const {
        user: { id: userId },
        body: { name, completed },
        params: { id: taskId },
    } = req

    console.log(req.body, req.params, req.user)

    // Check for info/data in the req
    if (!name || !completed) {
        throw new BadRequestError(' There is no payload ')
    }

    // build payload for ejecution
    const payload = {
        name: name,
        completed: completed
    }

    // Execution
    const task = await TaskModel.findByIdAndUpdate(taskId, payload)
    const newTask = await TaskModel.findOne({ _id: taskId })

    // Check if execution was successful
    if (!task) {
        throw new NotFoundError(`Task with ${taskId} Not Found`)
    }

    //Response for finalized OK
    res.status(StatusCodes.OK).json({ data: { taskUpdated: task._id, from: task.name, to: newTask }, success: true, error: false, message: 'Task Successfully updated!' })
}


module.exports = updateTask;
