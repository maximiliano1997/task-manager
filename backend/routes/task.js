const router = require('express').Router()

const { createTask, readTask, updateTask, deleteTask } = require('../controllers/tasks')

router.route('/').post(createTask) // <--- create his own tasks
router.route('/').get(readTask) // < --- read his own tasks
router.route('/:id').patch(updateTask) // <--- update his own tasks
router.route('/:id').delete(deleteTask) // <--- delete his own tasks


module.exports = router;