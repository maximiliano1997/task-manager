const router = express().Router()
const { userRegister, userRead, userLogin, userUpdate, userDelete } = require('../controllers/user')


router.route('./register').post(userRegister) // <--- Create his own account
// router.route('/').get(readUser) // <--- Read his own User Details 
router.route('./login').post(userLogin) // Login/Authentication
// router.route('/:id').delete(userDelete).patch(userUpdate) // <--- Delete or Update his own Account


// readUser, userUpdate, userDelete  <--- seran y deben ser usados en el router de userProfile

module.exports = router