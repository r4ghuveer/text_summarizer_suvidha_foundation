const express = require('express');
const router = express.Router();
const homeController = require("../controllers/home")
router.get('/',homeController.gethome);
router.post('/',homeController.postSummary);

module.exports = router;
