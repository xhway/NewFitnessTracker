const router = require("express").Router();
const {createUser, login, getSingleUser}= require("../../controllers/userController");

const {authMiddleWare} = require("../../utils/auth");

router.route("/").post(createUser)

router.route("/login").post(login)

router.route('/me').get(authMiddleWare, getSingleUser);

module.exports = router;