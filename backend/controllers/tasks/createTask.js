const TaskModel = require('../../models/Tasks')
const { BadRequestError } = require('../../errors/index')
const { StatusCodes } = require('http-status-codes')


const createTask = async (req, res) => {

    // Desestructuramos
    const { name, completed, createdAt } = req.body
    const { userId } = req.user

    console.log(req.body)
    console.log(req.user)


    // check if data is provided
    if (!name) {
        throw new BadRequestError('Please provide a name task')
    }

    // check if already exists
    const task = await TaskModel.findOne({ name })

    if (task) {
        throw new BadRequestError('This task already exists !!')
    }

    // buld payload for db
    const payload = {
        name, completed, createdAt, createdBy: userId
    }

    // Ejecutamos
    const taskCreation = await TaskModel.create(payload)


    // send response from sv to front
    res.status(StatusCodes.CREATED).json({ data: { payload, success: true, error: false, message: 'Task created succesfully !' } })
}


module.exports = createTask;