const express = require("express");
const router = express.Router();

const articalController = require("../controller/articalController.js");

router.get('/artical/add', articalController.add);

router.post('/artical/padd', articalController.padd);

router.get('/article/info/:id', articalController.info);

router.get('/article/edit/:id', articalController.edit);

router.post('/artical/pedit', articalController.pedit);

module.exports = router;