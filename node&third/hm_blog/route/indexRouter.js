const express = require("express");
const router = express.Router();

const indexController = require("../controller/indexController.js");

router.get('/', indexController.index)

router.get('/login', indexController.login)

router.get('/register', indexController.register)

module.exports = router;
