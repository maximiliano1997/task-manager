const TaskModel = require('../../models/Tasks')

const { StatusCodes } = require('http-status-codes')



const readTask = async (req, res) => {
    console.log('wtf')

    // Desestructuramos el payload mandado en el req. desde el frontend
    const {
        user: { userId }
    } = req

    // Verify if task exists
    const taskExist = await TaskModel.find({ createdBy: userId })

    if (!taskExist) {
        throw new Error(`No tasks foudn with id ${userId}`)
    }

    console.log(userId)
    console.log(taskExist)

    res.status(StatusCodes.OK).json({ data: { tasks: { taskExist } }, success: true, error: false, message: 'Tasks fetched successfully' })
}

module.exports = readTask;