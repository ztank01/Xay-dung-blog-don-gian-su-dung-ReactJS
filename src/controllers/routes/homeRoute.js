const express = require('express');
const {homeGetReq} = require('../controllers/homeController');
const router = express.Router();


// define the home page route
router.get('/', homeGetReq);
// define the about route
module.exports = router