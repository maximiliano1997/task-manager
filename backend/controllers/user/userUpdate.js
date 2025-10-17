const UserModel = require('../../models/Users')
const { BadRequestError, NotFoundError } = require('../../errors')
const { StatusCodes } = require('http-status-codes')


const userUpdate = async (req, res) => {
    // Desestructuramos el payload
    const {
        user: { userId },
        body: { name, email, password }
    } = req

    console.log(req.body, req.user)

    // verifica si ya existe el usuario y fetchealo para actualizarlo
    const user = await UserModel.findById(userId)
    if (!user) {
        throw new NotFoundError(`There is no user ---> ${name}`)
    }
    console.log(user)


    // crea los campos del payload
    if (name) user.name = name;
    if (password) user.password = password;
    if (email) {
        const emailExist = await UserModel.findOne({ email })
        if (emailExist && emailExist.id !== userId) {
            throw new BadRequestError('This email is already in use by other user.....')
        }
        user.email = email
    };

    // we save the user changes     
    await user.save()


    // Generar un nuevo token si el email <--(info critica) fue actualizado
    let token;
    if (user.email) {
        token = user.createJWT()
    }

    res.status(StatusCodes.OK).json({
        success: true,
        message: 'User Update Successfully',
        data: {
            id: user._id,
            name: user.name,
            email: user.email,
        },
        token: token || undefined
    })
}


module.exports = userUpdate



// this way below dont acept pre(save)
// const userUpdate = async (req, res) => {
//     // Desestructuramos el payload
//     const {
//         user: { userId },
//         body: { name, email, password }
//     } = req

//     // verifica si ya existe el usuario y fetchealo para actualizarlo
//     const user = await UserModel.findOne(email)
//     if (!user) {
//         throw new NotFoundError(`There is no user ---> ${name}`)
//     }


//     // Build payload
//     const payload = {}


//     // crea los campos del payload
//     if (name) payload.name = name;
//     if (email) {
//         const emailExist = await UserModel.findOne({ email })
//         if (emailExist && emailExist.id !== userId) {
//             payload.email = email
//         }
//     };

//     if (password) payload.password = password;

//     // Ejecutamos
//     const updatedUser = await UserModel.findByIdAndUpdate(userId, payload, { new: true, runvalidator: true })

//     // Generar un nuevo token si el email <--(info critica) fue actualizado
//     let token;
//     if (payload.email) {
//         token = updatedUser.createJWT()
//     }

//     res.status(StatusCodes.OK).json({
//         success: true,
//         message: 'User Update Successfully',
//         data: updatedUser,
//         token: token || undefined
//     })
// }

