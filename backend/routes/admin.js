const router = require('express').Router()
const { readAllUsers, updateUsers, deleteUsers, readAllTasks, updateTasks, deleteTasks } = require('../controllers/admin/adminPanel')

// Panel de Usuarios <-- para el admin
router.route('/userPanel').get(readAllUsers)
router.route('./userPanel/:id').patch(updateUsers)
router.route('./userPanel/:id').delete(deleteUsers)

// Panel de Usuarios <-- para el admin
router.route('./taskPanel').get(readAllTasks)
router.route('./taskPanel/:id').patch(updateTasks)
router.route('./taskPanel/:id').delete(deleteTasks)


module.exports = router;