const { StatusCodes } = require('http-status-codes')
const CustomAPIError = require('./custom-error')


class NotFoundError extends CustomAPIError {
    constructor(message) {
        super(message)
        this.statusCodes = StatusCodes.NOT_FOUND
        this.error = true
        this.success = false
        this.err = err
    }
}



module.exports = NotFoundError;