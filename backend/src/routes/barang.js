const express = require("express")
const router = express.Router()
const {
queryBarang,
postBarang,
deleteBarang,
} =require("../controllers/barang")
// const verifyJWT = require("../middlewares/verifyJWT")

router.get("/",queryBarang)
router.post("/",postBarang)
router.delete("/:id",deleteBarang)

module.exports = router