const express = require('express');
const {postGetReq,postPostReq,postPutReq,postDeleteReq} = require('../controllers/postController');
const router = express.Router();


// define the home page route
router.get('/:postID', postGetReq);
router.post('/insert', postPostReq);
router.post('/update/:postID', postPutReq);
router.get('/delete/:postID', postDeleteReq);
// define the about route
module.exports = router