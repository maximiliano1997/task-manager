const UserModel = require('../../models/Users')
const { BadRequestError, NotFoundError } = require('../../errors')
const { StatusCodes } = require('http-status-codes')



const userDelete = async (req, res) => {

    // Desestructuramos el payload
    const {
        params: { id: userId }
    } = req

    // verifica la existencia del usuario
    const userCheck = await UserModel.findOne({ _id: userId })
    if (!userCheck) {
        throw new NotFoundError(`User --> ${userId} doesn't exist`)
    }


    // Ejecutamos
    const user = await UserModel.findByIdAndUpdate({ _id: userId })

    // verificamos que la ejecucion sea exitosa
    if (!user) {
        throw new NotFoundError(`User Delete Failed`)
    }

    console.log('User Deleted Successfully')

    // Respose final de OK
    res.status(StatusCodes.OK).json({ data: { success: true, error: false, message: 'User Deleted Successfully' } })
}


module.exports = userDelete;
