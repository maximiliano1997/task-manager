const TaskModel = require('../../models/Tasks')
const { BadRequestError, NotFoundError } = require('../../errors/index')
const { StatusCodes } = require('http-status-codes')



const deleteTask = async (req, res) => {

    // Desestructuramos el payload
    const {
        user: { userId },
        params: { id: taskId },
    } = req

    // Check if exist info/data in the request
    if (!taskId) {
        throw new BadRequestError('Invalid Task ID')
    }

    // Execution
    const task = await TaskModel.deleteOne({ _id: taskId, createdBy: userId })

    // Check if execution was successfull
    if (!task) {
        throw new NotFoundError(`No task with id ${taskId}`)
    }


    // Final Response if everything was OK
    res.status(StatusCodes.OK).json({ data: { deleted: task }, success: true, error: false, message: 'Task Delete --> Success' })
}


module.exports = deleteTask;
