const express = require("express")
const router = express.Router()
const {
queryAnime,
postAnime,
updateAnime,
updateLikeAnime,
deleteAnime,
} = require("../controllers/anime")
// const verifyJWT = require("../middlewares/verifyJWT")

router.get("/",queryAnime)
router.post("/",postAnime)
router.put("/:id",updateAnime)
router.put("/:id/:like",updateLikeAnime)
router.delete("/:id",deleteAnime)

module.exports = router