const mongoose = require('mongoose')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs')


const { Schema } = mongoose


const userSchema = Schema({
    name: {
        type: String,
        required: [true, 'Please provide name']
    },
    email: {
        type: String,
        requred: [true, 'Please provide Email']
    },
    password: {
        type: String,
        required: [true, 'Please provide a password']
    },
    profileImg: {
        type: String
    },
    role: String,
}, {
    timestamps: true
}
)


userSchema.pre('save', async function () {
    console.log('pre.saved')
    const salt = await bcrypt.genSalt(10)
    this.password = await bcrypt.hash(this.password, salt)
})

userSchema.methods.createJWT = function () {
    return jwt.sign(
        { userId: this._id, name: this.name },
        process.env.JWT_SECRET,
        { expiresIn: process.env.JWT_LIFETIME, }
    )
}

userSchema.methods.comparePassword = async function (candidatePassword) {
    const isMatch = await bcrypt.compare(candidatePassword, this.password)
    return isMatch
}

const UserModel = mongoose.model('user', userSchema)

module.exports = UserModel