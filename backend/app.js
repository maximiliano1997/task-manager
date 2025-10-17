// modules or dependencies
require('dotenv').config()
require('express-async-errors')
const cors = require('cors')

const express = require('express')
const app = express()
const connectDB = require('./db/connectDB')
const authenticateUser = require('./middlewares/authentication')


// routers
const authRouter = require('./routes/auth')
const userProfileRouter = require('./routes/userProfile')
const taskRouter = require('./routes/task')
const adminPanel = require('./routes/admin')

// pre-middle
app.use(express.json())
app.use(cors())
// app.use(cors({
//     origin: 'http://localhost:5173/',
//     methods: ['GET', 'POST', 'PATCH', 'DELETE'],
//     allowedHeaders: ['Content-Type', 'Authorization'],
// }))


//principal routes
app.use('/api/v1/auth', authRouter)
app.use('/api/v1/userProfile', authenticateUser, userProfileRouter)
app.use('/api/v1/tasks', authenticateUser, taskRouter)
app.use('/api/v1/admin', adminPanel)

// after-middle

const port = 3000
const start = async () => {
    try {
        // conexion db
        await connectDB(process.env.MONGO_URI)
            .then((success) => console.log('Connect to DB Success!'))
            .catch((error) => console.log('Connect to DB Failed !', error))

        // listen to server
        app.listen(port, '0.0.0.0', () => {
            console.log(`Server listening on localhost:${port}`)
        })
    } catch (error) {
        console.log(error)
    }
}

start()