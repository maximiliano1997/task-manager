const UserModel = require('../../models/Users')
const { StatusCodes } = require('http-status-codes')
const { BadRequestError, UnauthenticatedError } = require('../../errors')

const userLogin = async (req, res) => {
    const { email, password } = req.body

    console.log(req.body)

    // verify if everything is provided for login
    if (!email || !password) {
        throw new BadRequestError('Please provide email and password')
    }

    // Verify the user exists in db
    const user = await UserModel.findOne({ email })
    console.log(user)
    if (!user) {
        throw new UnauthenticatedError('Invalid credentials')
    }

    // verify the password
    const isPasswordCorrect = await user.comparePassword(password)
    console.log(isPasswordCorrect)
    if (!isPasswordCorrect) {
        throw new UnauthenticatedError('Invalid Credentials')
    }


    // create token jwt
    const token = user.createJWT()

    // response from server
    res.status(StatusCodes.OK).json({ user: { name: user.name, role: user.role }, token })

}


module.exports = userLogin