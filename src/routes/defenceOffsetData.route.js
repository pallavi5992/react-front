const express = require ('express')
const router =express.Router()
const controller =require('../controllers/defenceOffsetData.controller')
const auth=require("../middleware/auth/auth");


router.get("/addDefenceOffsetOffline/:dataStatus/:ip",[auth.verifyToken],controller.addDefenceOffsetOfflinedata)


module.exports =router
