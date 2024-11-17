const router = express().Router()
const { userRead, userUpdate, userDelete } = require('../controllers/user/index')

router.route('/').get(userRead)
router.route('/:id').patch(userUpdate).delete(userDelete)


module.exports = router