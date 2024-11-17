const UserModel = require('../../models/Users')
const { StatusCodes } = require('http-status-codes')
const { BadRequestError } = require('../../errors/index')



const userRead = async (req, res) => {
    const {
        user: { userId }
    } = req

    const user = await UserModel.findOne({ _id: userId })

    if (!user) {
        throw new BadRequestError('User does not exist')
        // return res.status(StatusCodes.OK).json({ data: { user, success: true, error: false, message: 'User does not exist !!' } })
    } else {
        console.log('Getting User Details')
    }


    console.log('Your Profile: ', user)

    res.status(StatusCodes.OK).json({ data: { user, success: true, error: false, message: 'User Profile/Details completed Succesfully' } })
}


module.exports = userRead;

