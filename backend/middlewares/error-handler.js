const { StatusCodes } = require('http-status-codes')


const errorHandlerMiddleware = (err, req, res, next) => {

    let customError = {
        statusCode: err.statusCode || StatusCodes.INTERNAL_SERVER_ERROR,
        msg: err.message || 'Something went wrong try again leter',
        error: true,
        success: false,
    }

    // if adicionales en caso de querer manejar otros errores especiales/especificos

    return res.status(customError.statusCode).json({ message: customError.msg, error: customError.error, success: customError.success, })
}

module.exports = errorHandlerMiddleware;