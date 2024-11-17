const { StatusCodes } = require('http-status-codes')
const CustomAPIError = require('./custom-error')


class BadRequestError extends CustomAPIError {
    constructor(message, err) {
        super(message)
        this.statusCodes = StatusCodes.BAD_REQUEST
        this.error = true
        this.success = false
        this.err = err || message
    }
}

module.exports = BadRequestError;

