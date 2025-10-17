// dependencies
const UserModel = require('../../models/Users')
const TaskModel = require('../../models/Tasks')
const { StatusCodes } = require('http-status-codes')
const { BadRequestError, NotFoundError } = require('../../errors')


// read users
const readAllUsers = async (req, res) => {
    const { user: userId } = req.body

    const users = await UserModel.find({})


    res.status(StatusCodes.OK).json({ data: { users: users } })
}


// update users
const updateUsers = async (req, res) => {
    const { id } = req.params

    const payload = {
        name: req.body.name,
        email: req.body.email,
        password: req.body.password,
        role: req.body.role
    }

    const userToUpdate = await UserModel.findByIdAndUpdate(id, payload, { new: true })

    res.status(StatusCodes.OK).json({ data: { userUpdated: userToUpdate, success: true, error: false, message: 'adminPanel: User Updated Success!' } })
}

// delete users
const deleteUsers = async (req, res) => {

    // Desestructuramos las propiedades del request/payload
    const { id } = req.params

    const userToDelete = await UserModel.findByIdAndDelete({ _id: id })

    res.status(StatusCodes.OK).json({ data: { userDelete: userToDelete, success: true, error: false, message: 'adminPanel: User Deleted Success!' } })
}


// read tasks
const readAllTasks = async (req, res) => {
    const { user: userId } = req.body

    const tasks = await TaskModel.find()

    res.status(StatusCodes.OK).json({ data: { tasks: tasks, success: true, error: false, message: 'adminPanel: All Tasks Success' } })
}

// update tasks
const updateTasks = async (req, res) => {
    const { id } = req.params

    const payload = {
        name: req.body.name,
        completed: req.body.completed
    }

    const taskToUpdate = await TaskModel.findByIdAndUpdate(id, payload, { new: true })

    res.status(StatusCodes.OK).json({ data: { taskUpdated: taskToUpdate, success: true, error: false, message: 'adminPanel: Task Updated Success!' } })
}


// delete tasks 
const deleteTasks = async (req, res) => {
    const { id } = req.params  // <--- siempre que trabajamos con /:id en la URL nos referimos a params

    const taskToDelete = await TaskModel.findByIdAndDelete({ _id: id })

    res.status(StatusCodes.OK).json({ data: { taskDeleted: taskToDelete, success: true, error: false, message: 'adminPanel: Task Deleted Success!' } })
}

module.exports = { readAllUsers, updateUsers, deleteUsers, readAllTasks, updateTasks, deleteTasks }