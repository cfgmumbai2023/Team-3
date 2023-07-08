const { Router } = require("express")
const { addRecord, getLatest } = require("../controllers/previous")

const previousRouter = Router()

previousRouter.post("/", addRecord)
previousRouter.get("/:cId", getLatest)

module.exports = previousRouter
