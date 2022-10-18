const {postList} = require("../models/postList");

function homeGetReq(req, resp){
    resp.statusCode = 200;
    resp.render('index', {
        caption: 'Post List',
        postList: postList
    });
}

module.exports = {
    homeGetReq
}