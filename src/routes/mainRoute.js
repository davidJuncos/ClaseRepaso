const express = require('express');
const { route } = require('express/lib/application');
const router = express.Router();

const homeController = require('../controllers/homeController');


router.get('/', homeController.gethome)

module.exports = router;