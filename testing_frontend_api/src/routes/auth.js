const express = require("express")
const router = express.Router();

const {
    register,
    login,
    refreshToken,
    logout
} = require("../controllers/auth")

router.post("/register",register)
router.post("/login",login)
router.get("/refreshToken",refreshToken)
router.get("/logout",logout)

module.exports = router