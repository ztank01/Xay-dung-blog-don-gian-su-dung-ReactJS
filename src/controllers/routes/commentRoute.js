const express = require('express');
const {commentPostReq} = require('../controllers/commentController');
const router = express.Router();


// define the home page route
router.post('/postComment', commentPostReq);
// define the about route
module.exports = router