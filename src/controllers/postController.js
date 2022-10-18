const {postList} = require("../models/postList");

function postGetReq(req, resp){
    const postID = Number(req.params.postID);
    var post = postList.find(obj => {
        return obj.id == postID;
    });
    resp.render('post', {
        postID: postID,
        postContent: post['content'],
        commentList: post['comment']
    });
}

function postPostReq(req, resp){
    const content = req.body['content'];
    var newPostId;
    if (postList.length != 0){
        newPostId = Number(postList[postList.length - 1]['id']) + 1;
    }
    else{
        newPostId = Number(1);
    }
    const post = { id:`${newPostId}`, content:content, comment:[] };
    postList.push(JSON.parse(JSON.stringify(post)));
    resp.redirect('/');
}

function postPutReq(req, resp){
    const postID = Number(req.params.postID);
    var post = postList.find(obj => {
        return obj.id == postID;
    });
    post['content'] = req.body['content'];
    resp.redirect('/');
}

function postDeleteReq(req, resp){
    const postID = Number(req.params.postID);
    var index = postList.findIndex(obj => {
        return obj.id == postID;
    });
    postList.splice(index, 1);
    resp.redirect('/')
}

module.exports = {
    postGetReq,
    postPostReq,
    postPutReq,
    postDeleteReq
}