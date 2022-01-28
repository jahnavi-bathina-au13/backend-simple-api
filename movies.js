const express = require("express")

const{helloWorld} = require("../controllers/movies")

router = express.Router()
router.get("/", helloWorld)
module.exports = router