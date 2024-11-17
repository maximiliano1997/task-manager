const UserModel = require('../../models/Users')
const { StatusCodes } = require('http-status-codes')
const jwt = require('jsonwebtoken')

// const errors = require('')



const userRegister = async (req, res) => {
    const { name, email, password } = req.body

    console.log(req.body)

    // verify if exist already
    const user = await UserModel.findOne({ email })

    console.log('user:', user)

    if (user) {
        throw new Error('This User already exists')
    }

    // verify if necesary data is provided
    if (!name) {
        throw new BadRequestError('Please provide Name')
    }
    if (!email) {
        throw new BadRequestError('Please provide Name')
    }
    if (!password) {
        throw new BadRequestError('Please provide Name')
    }

    // encrypt the password

    const salt = bcrypt.getSalt(10)
    const hashPassword = await bcrypt.hashSync(password, salt)

    if (!hashPassword) {
        throw new Error('Hashpass: Something went wrong !')
    }

    const payload = {
        ...req.body,
        role: 'USER',
    }

    const userCreation = await UserModel.create(payload)

    // create JWT verification token
    const token = userCreation.createJWT()


    res.status(StatusCodes.CREATED).json({ data: { payload, success: true, error: false, message: 'User created Successfully!' }, token })
}

