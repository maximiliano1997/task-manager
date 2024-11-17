const { StatusCodes } = require('http-status-codes')
const CustomAPIError = require('./custom-error')


class UnauthenticatedError extends CustomAPIError {
    constructor(message) {
        super(message)
        this.statusCodes = StatusCodes.UNAUTHORIZED
        this.error = true
        this.success = false
        // this.err = err
    }
}


module.exports = UnauthenticatedError