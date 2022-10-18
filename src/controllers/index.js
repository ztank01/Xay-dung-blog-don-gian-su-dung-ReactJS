const express = require('express');
const path = require('path');
const app = express();
const PORT = 5000;

const homeRoute = require('./routes/homeRoute');
const postRoute = require('./routes/postRoute');
const commentRoute = require('./routes/commentRoute');

app.set('view engine', 'hbs');
app.set('views', path.join(__dirname,'views'));

app.use(express.json());
app.use(express.urlencoded({ extended: true }))

app.use((req,resp,next)=> {
    console.log(`${req.method} ${req.url}`);
    next();
});

app.use('/site', express.static(path.join(__dirname, 'public')));

app.use('/', homeRoute);

app.get('/post/new', (req, resp) =>{
    resp.render('newPost', {
        caption: "Create New Post",
        link: "/post/insert",
        method: "POST"
    });
});

app.get('/post/update/:postID', (req, resp) =>{
    const postID = Number(req.params.postID);
    resp.render('newPost', {
        caption: `Update Post ${postID}`,
        link: `/post/update/${postID}`,
        method: "POST"
    });
});

app.use('/post', postRoute);

app.use('/comment', commentRoute);

app.listen(PORT, () => {
    console.log(`App Server start at port ${PORT}`);
});