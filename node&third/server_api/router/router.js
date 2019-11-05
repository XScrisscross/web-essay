const express = require('express');
const router = express.Router();

const controller = require('../controller/controller.js');

router.get('/getAllData',controller.getAllData);

router.get('/getOneData/:id',controller.getOneData)

router.post("/addHero",controller.addHero);

// 软删除
router.get("/deletehero/:id",controller.deletehero);

module.exports = router;